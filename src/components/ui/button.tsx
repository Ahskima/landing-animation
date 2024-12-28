import { cn } from "@/libs/utils"; // Updated import path
import type { ReactNode } from "react";
import { cva } from "class-variance-authority";

interface IButton {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  variant?: "default" | "outline" | "gradient";
  isLoading?: boolean;
}

const buttonVariants = cva(
  "relative flex justify-center items-center gap-1 px-6 py-3 rounded-rounded max-lg:w-full h-[54px] hover:opacity-75 text-lg font-bold font-geDinarone text-black/85 leading-6",
  {
    variants: {
      variant: {
        default:
          "bg-Background bg-white-w1",
        outline:
          "border-solid border-[1px] border-white/30 !bg-white/15 text-white/70 font-sora font-normal leading-[30px] px-6",
        gradient: "bg-linear-button",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Button = ({
  className,
  children,
  onClick,
  type,
  variant,
  isLoading,
}: IButton) => {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, className }))}
      onClick={onClick}
      tabIndex={0}
    >
      {isLoading ? (
        <div className="border-2 mr-2 border-b-[transparent] border-background border-solid rounded-rounded w-5 h-5 animate-spin" />
      ) : (
        <>{children}</>
      )}
    </button>
  );
};

export default Button;
