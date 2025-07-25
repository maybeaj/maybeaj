import { configureStore } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { rootReducer } from './rootReducer'
import logger from 'redux-logger'

// 개발 환경에서만 logger 활성화
const useLogger = process.env.NODE_ENV !== 'production'

const initializeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      useLogger
        ? getDefaultMiddleware().concat(logger)
        : getDefaultMiddleware()
  })
  return store
}

export function useStore() {
  const store = useMemo(() => initializeStore(), [])
  return store
}
