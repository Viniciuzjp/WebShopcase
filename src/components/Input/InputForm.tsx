import { Search } from "lucide-react";
import InputProps from "./interface";

export default function InputForm({name, id, type, placeholder, className, onChange}: InputProps) {
    return (
        <div className="relative">
            <input className={`${className} bg-gray-100 pl-13 pr-3 py-3 placeholder:text-gray-800 placeholder:text-xl placeholder:font:normal outline-none border-neutral-900`} type={type} placeholder={placeholder} onChange={onChange} name={name} id={id} />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-neutral-800" />
        </div>
    );
}