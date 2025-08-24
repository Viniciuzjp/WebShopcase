
export interface CJVariant {
  vid: string;
  pid: string;
  variantName: string | null;
  variantNameEn: string | null;
  variantImage: string | null;
  variantSku: string;
  variantUnit: string | null;
  variantProperty: string | null;
  variantKey: string | null;
  variantLength: number | null;
  variantWidth: number | null;
  variantHeight: number | null;
  variantVolume: number | null;
  variantWeight: number | null;
  variantSellPrice: number | string;
  createTime: number | null;
  variantStandard: string | null;
  variantSugSellPrice: number | string | null;
  combineNum: number | null;
  inventoryNum: number | null;
  combineVariants: any | null;
}

export interface CJProductDetails {
  pid: string;
  productName: string;
  productNameSet: string[];
  productNameEn: string;
  productSku: string;
  productImage: string;
  productImageSet: string[];
  productWeight: string;
  productUnit: string | null;
  productType: string;
  categoryId: string;
  categoryName: string;
  entryCode: string | null;
  entryName: string | null;
  entryNameEn: string | null;

  materialName: string | null;
  materialNameSet: string[];
  materialNameEn: string | null;
  materialNameEnSet: string[];
  materialKey: string | null;
  materialKeySet: string[];

  packingWeight: string | null;
  packingName: string | null;
  packingNameSet: string[];
  packingNameEn: string | null;
  packingNameEnSet: string[];
  packingKey: string | null;
  packingKeySet: string[];

  productKey: string | null;
  productKeySet: string[];
  productKeyEn: string | null;

  productPro: string | null;
  productProSet: string[];
  productProEn: string | null;
  productProEnSet: string[];

  sellPrice: string;
  sourceFrom: number | string;
  description: string;

  variants: CJVariant[];

  addMarkStatus: number | null;
  createrTime: string | null;
  productVideo: string | null;
  status: string | null;
  suggestSellPrice: string | null;
  listedNum: number | null;
  supplierName: string | null;
  supplierId: string | null;
  customizationVersion: string | null;

  customizationJson1: any | null;
  customizationJson2: any | null;
  customizationJson3: any | null;
  customizationJson4: any | null;
}

// ---------------- MAIN PRODUCT ----------------
export interface CJProduct {
  pid: string;
  productName: string;
  productNameEn: string;
  productSku: string;
  productImage: string;
  productWeight: string;
  productType: string;
  productUnit: string | null;
  categoryName: string;
  listingCount: number;
  sellPrice: string;
  remark: string | null;
  addMarkStatus: number | null;
  createTime: number;
  isVideo: boolean | null;
  saleStatus: number;
  listedNum: number;
  supplierName: string | null;
  supplierId: string | null;
  categoryId: string;
  sourceFrom: string;
  shippingCountryCodes: string[];
  threeCategoryName: string | null;
  twoCategoryId: string | null;
  twoCategoryName: string | null;
  oneCategoryId: string | null;
  oneCategoryName: string | null;
  customizationVersion: string | null;

  details?: CJProductDetails;
}
export interface ProductProps extends CJProduct {
  details: CJProductDetails;
}