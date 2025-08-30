import type{ ButtonProps, ButtonVariants, ButtonSizes} from "../../types";
import { cn } from "../../utils/cn";


const Button: React.FC<ButtonProps> = ({
  children, 
  variant, 
  type = "button",
  size = "small", 
  className, 
  onClick 
}) => {

  const baseClasses = "font-Poppins text-base hover:cursor-pointer rounded-[10px]";
  const variants : Record<ButtonVariants, string> = {
    primary: `bg-DarkGreen text-white border border-DarkGreen`,
    secondary: `border-2 border-white text-white`,
    tertiary: `border-2 border-DarkGreen text-DarkGreen`,
  };

  const sizes : Record<ButtonSizes, string> = {
    small: "w-35 h-12",
    medium: "w-52 h-15",
    large: "px-21 py-4",
  };

  return (
    <button
      type={type}
      className={cn(baseClasses, variants[variant || "primary"], sizes[size], className)}
      onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;
  