import { Metadata } from 'next'
import Link from 'next/link'

export default function Page() {
  return (
    <h1>
      <Link href="/dashboard">Dashboard</Link>
      Hello, Next.js!
    </h1>
  )
}