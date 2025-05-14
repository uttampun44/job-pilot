import ThemeContext from "./features/ThemeContext";

export interface CombineContextProps {
  children: React.ReactNode;
}

export default function CombineContext({ children }: CombineContextProps) {
  return <ThemeContext>{children}</ThemeContext>;
}
