export interface ButtonProps {
  label: string;
  startIcon?: string | null;
  endIcon?: string | null;
  variant?: "default" | "outline" | "text" | null;
  color?: "default" | "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  disableShadow?: boolean;
}
