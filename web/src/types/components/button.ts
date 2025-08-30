import type React from "react";

export type ButtonVariants = "primary" | "secondary" | "tertiary";
export type ButtonSizes = "small" | "medium" | "large";
export type ButtonType = "button" | "submit" | "reset";

export interface ButtonProps {
  children: React.ReactNode;
  type?: ButtonType;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  className?: string;
  onClick?: () => void;
}