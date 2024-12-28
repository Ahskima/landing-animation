import { InputProps } from "@/types/types";
import clsx from "clsx";
import React from "react";

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder = "",
  label,
  error,
  className,
  disabled,
  value,
  ref,
  register,
  ...inputProps
}) => {
  return (
    <div className={clsx("flex flex-col gap-3", className)}>
      {label && (
        <label
          className="font-normal text-grey-w1 text-md leading-[21.6px] tracking-[-0.08px]"
        >
          {label}
        </label>
      )}
      <input
        dir="dir"
        ref={ref}
        disabled={disabled}
        value={value}
        autoComplete={inputProps.autoComplete}
        {...register}
        {...inputProps}
        type={type}
        placeholder={placeholder}
        className={clsx(
          "block border-white/25 bg-white/[.08] disabled:opacity-50 px-3 py-[13px] border rounded-[8px] ring-0 focus-visible:ring-[3px] focus-visible:ring-green-w1/20 ring-offset-green-w1/65 focus-visible:ring-offset-2 w-full font-normal text-md text-sm text-white placeholder:text-grey-w1/65 leading-[22.4px] tracking-normal focus-visible:outline-none disabled:cursor-not-allowed",
          error &&
            "!ring-offset-2 focus-visible:border-destructive/25 !ring-offset-destructive !focus-visible:ring-destructive/20",
          className 
        )}
      />
      {error && (
        <p className="mt-1 text-destructive text-sm">{error.message}</p>
      )}
    </div>
  );
};

export default Input;
