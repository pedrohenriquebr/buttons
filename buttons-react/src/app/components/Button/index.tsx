import { ButtonProps } from '../props';
import './index.scss';
export default function Button({
  label,
  startIcon = null,
  endIcon = null,
  variant = 'default',
  color = 'primary',
  size = 'md',
  disabled = false,
  disableShadow = false,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      color={color}
      className={[
        startIcon && 'startIcon',
        endIcon && 'endIcon',
        disableShadow && 'disabledShadow',
        `variant-${variant}`,
        `size-${size}`,
      ].join(' ')}
    >
      {startIcon && <i className="material-icons">{startIcon}</i>}
      {label}
      {endIcon && <i className="material-icons">{endIcon}</i>}
    </button>
  )
}
