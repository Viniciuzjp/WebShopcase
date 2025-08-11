import InputForm from "@/components/Input/InputForm";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between gap-10 px-4 py-8">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">ShopCase</h1>
      </div>
      <div className="flex items-center gap-4">
        <InputForm
          type="text"
          placeholder="Buscar..."
          name="search"
          id="search"
        />
      </div>
      <div>
        <ul className="flex gap-8">
          <li>
            <a href="#">Página inicial</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Contatos</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
