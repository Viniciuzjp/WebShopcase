import InputProps from "./interface";

export default function InputForm({
  name,
  id,
  type = "text",
  placeholder,
  className = "",
  onChange,
  ...rest
}: InputProps) {
  return (
    <div className="w-full">
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
        className={`
          w-full
          border-b
          border-neutral-400
          bg-transparent
          px-0
          py-3
          text-base
          font-normal
          text-neutral-900
          placeholder:text-neutral-500
          outline-none
          transition-colors
          duration-200
          focus:border-black
          disabled:cursor-not-allowed
          disabled:opacity-50
          ${className}
        `}
      />
    </div>
  );
}
