import { Search } from "lucide-react";
import InputProps from "./interface";

export default function InputForm({name, id, type, placeholder, className, onChange}: InputProps) {
    return (
        <div className="relative">
            <input className={`${className}  border-b text-black pl-3 pr-2 py-3 placeholder:text-gray-600 placeholder:text-md placeholder:font:normal outline-none border-neutral-400`} type={type} placeholder={placeholder} onChange={onChange} name={name} id={id} />
        </div>
    );
}