import Link from 'next/link'
import Nav from '../components/Nav/nav'
import Card from '../components/Card/card'

export default function Index() {
  return (
    <div>
      <Nav />
      <div className="hero">
        <h1 className="title">Next.js + Tailwind css</h1>
        <Link href="/about">
          <a className="text-center text-red-500">About Page</a>
        </Link>
        <Card />
      </div>
    </div>
  )
}
