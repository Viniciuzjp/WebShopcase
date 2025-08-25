import axios from "axios";
import fs from "fs";
import cors from "cors";
import express from "express";
import dotenv from 'dotenv';
dotenv.config();


const app = express();
app.use(cors());

const PORT = 3004;

const CJ_EMAIL = process.env.CJ_EMAIL;
const CJ_API_KEY = process.env.CJ_API_KEY;
const PRODUCTS_JSON = process.env.PRODUCTS_JSON;
const DETAILS_JSON = process.env.DETAILS_JSON;

let tokenData = {
  accessToken: null,
  accessTokenExpiry: null,
  refreshToken: null,
  refreshTokenExpiry: null,
};

function saveToken(tokenData) {
  fs.writeFileSync("token.json", JSON.stringify(tokenData, null, 2));
}

function loadToken() {
  if (fs.existsSync("token.json")) {
    const data = JSON.parse(fs.readFileSync("token.json"));
    tokenData = {
      ...data,
      accessTokenExpiry: new Date(data.accessTokenExpiry),
      refreshTokenExpiry: new Date(data.refreshTokenExpiry),
    };
  }
}

async function getAccessToken() {
  const url =
    "https://developers.cjdropshipping.com/api2.0/v1/authentication/getAccessToken";
  const res = await axios.post(
    url,
    { email: CJ_EMAIL, password: CJ_API_KEY },
    { headers: { "Content-Type": "application/json" } }
  );
  const data = res.data.data;
  tokenData = {
    accessToken: data.accessToken,
    accessTokenExpiry: new Date(data.accessTokenExpiryDate),
    refreshToken: data.refreshToken,
    refreshTokenExpiry: new Date(data.refreshTokenExpiryDate),
  };
  saveToken(tokenData);
  console.log("Access token retrieved:", tokenData.accessToken);
}

async function refreshAccessToken() {
  const url =
    "https://developers.cjdropshipping.com/api2.0/v1/authentication/refreshAccessToken";
  const res = await axios.post(
    url,
    { refreshToken: tokenData.refreshToken },
    { headers: { "Content-Type": "application/json" } }
  );
  const data = res.data.data;
  tokenData = {
    accessToken: data.accessToken,
    accessTokenExpiry: new Date(data.accessTokenExpiryDate),
    refreshToken: data.refreshToken,
    refreshTokenExpiry: new Date(data.refreshTokenExpiryDate),
  };
  saveToken(tokenData);
  console.log("Access token refreshed:", tokenData.accessToken);
}

async function getValidAccessToken() {
  loadToken();
  const now = new Date();
  if (!tokenData.accessToken || now >= tokenData.accessTokenExpiry) {
    console.log("Access token expired or not available.");
    if (tokenData.refreshToken && now < tokenData.refreshTokenExpiry) {
      await refreshAccessToken();
    } else {
      await getAccessToken();
    }
  }
  return tokenData.accessToken;
}

function saveProductsToJSON(products) {
  const uniqueProducts = Array.from(
    new Map(products.map((p) => [p.pid, p])).values()
  );
  fs.writeFileSync(PRODUCTS_JSON, JSON.stringify(uniqueProducts, null, 2));
  console.log(
    `Products saved to ${PRODUCTS_JSON} (${uniqueProducts.length} unique items)`
  );
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function listAllProducts({ keyword, categoryId, maxPages = 5 } = {}) {
  const token = await getValidAccessToken();
  let allProducts = [];
  let pageNum = 1;
  const pageSize = 50;

  while (true) {
    const params = { pageNum, pageSize, productType: 0 };
    if (keyword) params.keyword = keyword;
    if (categoryId) params.categoryId = categoryId;

    try {
      const res = await axios.get(
        "https://developers.cjdropshipping.com/api2.0/v1/product/list",
        {
          headers: { "CJ-Access-Token": token },
          params,
        }
      );

      const products = res.data.data?.list || [];
      if (products.length === 0) break;

      allProducts.push(...products);

      console.log(`Page ${pageNum} completed, total: ${allProducts.length}`);

      if (pageNum >= maxPages) {
        console.log(`Max pages (${maxPages}) reached.`);
        break;
      }

      pageNum++;
      await sleep(1000);
    } catch (err) {
      console.error(
        "Error on page",
        pageNum,
        err.response?.data || err.message
      );
      break;
    }
  }

  return allProducts;
}

async function getProductDetail(pid, token) {
  try {
    const res = await axios.get(
      "https://developers.cjdropshipping.com/api2.0/v1/product/query",
      {
        headers: { "CJ-Access-Token": token },
        params: { pid },
      }
    );

    if (res.data.code === 200) {
      return res.data.data;
    } else {
      console.error("Erro no detalhe do produto:", res.data);
      return null;
    }
  } catch (err) {
    console.error("Erro em getProductDetail:", err.response?.data || err.message);
    return null;
  }
}

app.get("/api/produtos", (req, res) => {
  if (!fs.existsSync(PRODUCTS_JSON)) {
    return res.status(404).json({ message: "Products file not found" });
  }
  const products = JSON.parse(fs.readFileSync(PRODUCTS_JSON, "utf-8"));
  res.json(products);
});

app.get("/api/produtos/:id", async (req, res) => {
  const id = req.params.id;

  if (!fs.existsSync(PRODUCTS_JSON)) {
    return res.status(404).json({ message: "Products file not found" });
  }

  const products = JSON.parse(fs.readFileSync(PRODUCTS_JSON, "utf-8"));
  const product = products.find((p) => p.pid === id);

  if (!product) {
    return res.status(404).json({ message: "Produto não encontrado" });
  }

  let detailsCache = {};
  if (fs.existsSync(DETAILS_JSON)) {
    detailsCache = JSON.parse(fs.readFileSync(DETAILS_JSON, "utf-8"));
  }

  if (detailsCache[id]) {
    return res.json({ ...product, details: detailsCache[id] });
  }

  const token = await getValidAccessToken();
  const detail = await getProductDetail(id, token);

  if (detail) {
    detailsCache[id] = detail;
    fs.writeFileSync(DETAILS_JSON, JSON.stringify(detailsCache, null, 2));
    return res.json({ ...product, details: detail });
  }

  res.json(product);
});

(async () => {
  try {
    const categoryIds = ["491E5474-524C-4666-BDD7-4E35E38900EA"];
    let allProducts = [];

    for (const id of categoryIds) {
      const products = await listAllProducts({ categoryId: id, maxPages: 2 });
      allProducts.push(...products);
      await sleep(1000);
    }

    console.log(`Total products found: ${allProducts.length}`);
    saveProductsToJSON(allProducts);
  } catch (err) {
    console.error("Error:", err.response?.data || err.message);
  }
})();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
