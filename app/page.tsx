import { ClientComponent } from './ClientComponent'

async function getServerSideData(): Promise<{ 
  publicApiUrl: string | undefined, 
  privateApiSecret: string | undefined 
}> {
  return {
    publicApiUrl: process.env.NEXT_PUBLIC_API_URL,
    privateApiSecret: process.env.API_SECRET
  };
}

export default async function Home() {
  const { publicApiUrl, privateApiSecret } = await getServerSideData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={`text-white p-2 rounded-md ${process.env.NEXT_PUBLIC_ENVIRONMENT === 'development' ? 'bg-green-500' : 'bg-blue-500'}`}>
        현재 환경: {process.env.NEXT_PUBLIC_ENVIRONMENT}
      </div>
      
      <h1 className="text-4xl font-bold mb-8 mt-8">
        Next.js 14 환경 변수 종합 데모 - version 1
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <div className="p-6 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">서버 컴포넌트에서의 환경 변수</h2>
          <p className="mb-2">NEXT_PUBLIC_API_URL: {publicApiUrl}</p>
          <p className="mb-2">API_SECRET: {privateApiSecret}</p>
          <p className="text-sm text-gray-500">서버에서만 이 값들을 모두 볼 수 있습니다.</p>
        </div>

        <ClientComponent />
      </div>
    </main>
  )
}