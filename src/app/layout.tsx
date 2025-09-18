import type { Metadata } from "next";
import Header from "@/ui/Header/Header";
import "./globals.css";
import Footer from "@/ui/Footer/Footer";

export const metadata: Metadata = {
  title: "Shopcase",
  description: "Loja online",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  );
}
