import { Search } from "lucide-react";
import InputProps from "./interface";

export default function InputForm({label, name, id, type, placeholder, className, onChange}: InputProps) {
    return (
        <div className="relative">
            <input className={`${className} bg-gray-100 rounded-full pl-13 pr-3 py-2 text-gray-600 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500`} type={type} placeholder={placeholder} onChange={onChange} name={name} id={id} />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-500" />
        </div>
    );
}