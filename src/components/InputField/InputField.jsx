import { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const sizes = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2.5 text-base",
  lg: "px-5 py-3 text-lg",
};

const variants = {
  filled: "bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 focus:ring-2 focus:ring-pink-400",
  outlined: "border-2 border-purple-400 bg-white focus:ring-2 focus:ring-pink-500",
  ghost: "border-b-2 border-purple-400 focus:ring-1 focus:ring-pink-500 bg-transparent",
};

export default function InputField({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  variant = "outlined",
  size = "md",
  type = "text",
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col space-y-2 w-full">
      {label && (
        <label className="text-sm font-bold text-purple-700">{label}</label>
      )}

      <div className="relative">
        <input
          type={type === "password" && showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={clsx(
            "rounded-xl w-full focus:outline-none transition-all shadow-lg placeholder-gray-400",
            sizes[size],
            variants[variant],
            disabled && "bg-gray-200 cursor-not-allowed opacity-70",
            invalid && "border-red-500 focus:ring-red-500"
          )}
        />

        {type === "password" && (
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-pink-600 hover:text-pink-800 transition"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈 Hide" : "👁 Show"}
          </button>
        )}
      </div>

      {helperText && !invalid && (
        <p className="text-xs text-gray-500">{helperText}</p>
      )}
      {invalid && errorMessage && (
        <p className="text-xs font-semibold text-red-500">{errorMessage}</p>
      )}
    </div>
  );
}

InputField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  variant: PropTypes.oneOf(["filled", "outlined", "ghost"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  type: PropTypes.string,
};
