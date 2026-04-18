import { Link } from 'react-router-dom'

export function Brand({ inverse = false }) {
  return <Link to="/" className={`brand ${inverse ? 'brand--inverse' : ''}`} aria-label="Lifeline home">
    <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M4 4h9v5h6V4h9v9h-5v6h5v9h-9v-5h-6v5H4v-9h5v-6H4z" /></svg>
    <span>Life<em>line</em></span>
  </Link>
}
