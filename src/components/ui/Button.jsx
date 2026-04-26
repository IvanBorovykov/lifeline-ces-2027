import { ArrowUpRight } from 'lucide-react'

export function Button({ children, variant = 'dark', icon = true, className = '', type = 'button', ...props }) {
  return <button type={type} className={`button button--${variant} ${className}`} {...props}>
    <span>{children}</span>{icon && <ArrowUpRight size={16} />}
  </button>
}
