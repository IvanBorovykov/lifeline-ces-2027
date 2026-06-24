import { Link } from 'react-router-dom'
export function NotFoundPage(){return <main className="not-found"><span>404 / ROUTE NOT FOUND</span><h1>This page is outside<br/>the local network.</h1><Link to="/">Return home →</Link></main>}
