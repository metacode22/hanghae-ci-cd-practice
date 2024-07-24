'use client'

import { useState, useEffect } from 'react'

export function ClientComponent() {
  const [publicApiUrl, setPublicApiUrl] = useState<string>('')
  const [privateApiSecret, setPrivateApiSecret] = useState<string>('')

  useEffect(() => {
    setPublicApiUrl(process.env.NEXT_PUBLIC_API_URL || '')
    setPrivateApiSecret(process.env.API_SECRET || '')

    // 브라우저 콘솔에 환경 변수 출력
    console.log('====클라이언트에서 접근 가능한 환경 변수====')
    console.log('NEXT_PUBLIC_ENVIRONMENT:', process.env.NEXT_PUBLIC_ENVIRONMENT)
    console.log('NEXT_PUBLIC_API_URL:', process.env.NEXT_PUBLIC_API_URL)
    console.log('API_SECRET:', process.env.API_SECRET)
    console.log('====클라이언트에서 접근 가능한 환경 변수====')
  }, [])

  return (
    <div className="p-6 border rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">클라이언트 컴포넌트에서의 환경 변수</h2>
      <p className="mb-2">NEXT_PUBLIC_API_URL: {publicApiUrl}</p>
      <p className="mb-2">API_SECRET: {privateApiSecret}</p>
      <p className="text-sm text-gray-500">브라우저 콘솔을 확인해보세요.</p>
    </div>
  )
}