import type { Metadata } from "next";
import Header from "@/ui/Header/Header";
import "./globals.scss";
import Footer from "@/ui/Footer/Footer";
import { CartProvider } from "@/CartContext/Context";

export const metadata: Metadata = {
  title: "Shopcase",
  description: "Loja online",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
