import type{ ButtonProps, ButtonVariants, ButtonSizes, ButtonColors} from "../../types";
import { cn } from "../../utils/cn";


const Button: React.FC<ButtonProps> = ({

  children, 
  variant, 
  type = "button",
  size = "small", 
  textColor, 
  bgColor,  
  className, 
  onClick 

}) => {

  const baseClasses = "font-Poppins text-base hover:cursor-pointer";
  const variants : Record<ButtonVariants, string> = {
    primary: `bg-DarkGreen`,
    secondary: `border border-white rounded-[10px] bg-white`,
    tertiary: `bg-white rounded-[10px] text-[var(--color-${textColor})] border border-[var(--color-${bgColor})]`,
  };

  const sizes : Record<ButtonSizes, string> = {
    small: "px-4 py-2",
    medium: "px-6 py-3",
    large: "px-8 py-4",
  };

  return (
    <button
      type={type}
      className={cn(baseClasses, variants[variant || "primary"], sizes[size], className, `text-${textColor}`, `bg-${bgColor}`)}
      onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;
  