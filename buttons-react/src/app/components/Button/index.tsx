import { ButtonProps } from '../props'
import './index.scss'

export function rClass(classes: any[]): string {
  return classes
    .filter((d) => d)
    .join(' ')
    .trim()
}

export default function Button({
  label,
  startIcon = null,
  endIcon = null,
  disableShadow = false,
  disabled = false,
  variant = null,
  size = 'md',
  color = startIcon ||
  endIcon ||
  (disableShadow && !startIcon && !endIcon && !variant)
    ? 'primary'
    : 'default',
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      color={color}
      className={rClass([
        startIcon ? 'startIcon' : null,
        endIcon ? 'endIcon' : null,
        disableShadow ? 'disableShadow' : null,
        `variant-${variant??'default'}`,
        `size-${size}`,
      ])}
    >
      {startIcon && <i className="material-icons">{startIcon}</i>}
      {label}
      {endIcon && <i className="material-icons">{endIcon}</i>}
    </button>
  )
}
