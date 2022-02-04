import { ButtonProps } from '../props'
import './index.scss'

export function rclass(classes: any[]): string {
  return classes
    .filter((d) => d)
    .join(' ')
    .trim()
}

export default function Button({
  label = 'Default',
  startIcon = undefined,
  endIcon = undefined,
  disableShadow = false,
  disabled = false,
  variant = undefined,
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
      className={rclass([
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
