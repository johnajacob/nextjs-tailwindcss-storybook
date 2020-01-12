import Head from 'next/head'
import Card from '../components/Card/card'

// Fake Content Data
import { items } from '../data/content'

export default function Index() {
  return (
    <div>
      <Head>
        <title>This page has a title 🤔</title>
        <meta name="Description" content="NextJS Project Home Page" />
      </Head>

      <div className="flex h-screen justify-center items-center">
        <Card props={{ ...items }} />
      </div>
    </div>
  )
}
