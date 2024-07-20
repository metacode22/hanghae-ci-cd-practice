declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_ENVIRONMENT: 'development' | 'production'
      NEXT_PUBLIC_API_URL: string
      API_SECRET: string
    }
  }
}

export {}