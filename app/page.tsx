import { Metadata } from 'next'
import Link from 'next/link'

async function getData() {
  const res = await fetch('http://dev-unicorn-pms-order-server.lumous.cn/pms/bill/test')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Page() {
  const data = await getData()
  console.log(data)
  return (
    <h1>
      <Link href="/dashboard">Dashboard</Link>
      {data.msg}
    </h1>
  )
}