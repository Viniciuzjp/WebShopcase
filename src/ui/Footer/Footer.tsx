import Link from "next/link";

export default function Footer() {
    return (
        <>
        <footer className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-black">Hygg</h4>
              <p className="text-sm text-gray-600 text-pretty">
                Apresentendo o Hygg, uma plataforma de e-commerce que
                oferece uma experiência de compra online excepcional. Com uma
                ampla variedade de produtos, uma navegação intuitiva e uma
                experiência de compra rápida e fácil, o Hygg torna a compra
                online uma experiência agradável e conveniente.
              </p>
            </div>

            <div className="space-y-4">
              <h5 className="font-medium text-black">Shop</h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link
                    href="/categories"
                    className="hover:text-black transition-colors"
                  >
                    Todas as Categorias
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="hover:text-black transition-colors"
                  >
                    Novidades
                  </Link>
                </li>
                <li>
                  <Link
                    href="/deals"
                    className="hover:text-black transition-colors"
                  >
                    Melhores Ofertas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/bestsellers"
                    className="hover:text-black transition-colors"
                  >
                    Mais Vendidos
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h5 className="font-medium text-black">Suporte</h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-black transition-colors"
                  >
                    Contatos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shipping"
                    className="hover:text-black transition-colors"
                  >
                    Envios
                  </Link>
                </li>
                <li>
                  <Link
                    href="/returns"
                    className="hover:text-black transition-colors"
                  >
                    Retornos e Reembolsos
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-black transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h5 className="font-medium text-black">Compania</h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-black transition-colors"
                  >
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-black transition-colors"
                  >
                    Politicas de Privacidade
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-black transition-colors"
                  >
                    Termos e Condições
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-300 mt-12 pt-8 text-center">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Hygg. todos os direitos são unicamente e exclusivamente reservados por WebHygg Inc. Todos os direitos de imagem e marca registrada pertencem aos seus respectivos donos. 
            </p>
          </div>
        </div>
      </footer>
        </>
    )
}