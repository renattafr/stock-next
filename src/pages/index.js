import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Renatta's Page</title>
    </Head>
    <h1>Renatta's Page</h1>
    <p>
      This is a sample page for Renatta.
    </p>
    <Link href="/about">About</Link>
    </>
  )
}
