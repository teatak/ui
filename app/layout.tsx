import type { Metadata } from "next";
import { Noto_Sans_SC } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/registry'
import Links from '@/components/links'

const inter = Noto_Sans_SC({
  weight: '400',
  display: "block",
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: {
    template: '%s - Teatak',
    default: 'Teatak',
  },
  description: "teatak"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body className={inter.className}>
          <Links />
          {children}
        </body>
      </StyledComponentsRegistry>
    </html>
  )
}
