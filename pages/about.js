import Link from 'next/link'
import Nav from '../components/Nav/nav'

export default function About() {
  return (
    <div>
      <Nav />
      <div className="hero">
        <h1 className="title">About Page</h1>
        <Link href="/">
          <a className="text-center text-red-500">Home Page</a>
        </Link>
      </div>
    </div>
  )
}
