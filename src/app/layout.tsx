import type { Metadata } from "next";
import Header from "@/ui/Header/Header";
import "./globals.scss";
import Footer from "@/ui/Footer/Footer";

import Script from "next/script";
import { CartProvider } from "@/CartContext/Context";

export const metadata: Metadata = {
  title: "Shopcase",
  description: "Loja online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N8P0DYJMMB"
          strategy="afterInteractive"
        />

        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N8P0DYJMMB', { debug_mode: true });
          `}
        </Script>
      </head>
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
