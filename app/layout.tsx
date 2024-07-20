import { ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: 'Next.js 14 TypeScript Tailwind 환경 변수 데모',
  description: 'Next.js 14에서 TypeScript, Tailwind CSS와 환경 변수 사용하기',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}