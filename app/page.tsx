import Link from 'next/link'
import Demo from '@/components/demo'

export default function Page() {
  return (
    <div>
      <Link href="/dashboard">Dashboard</Link>
      <Demo></Demo>
    </div>
  )
}