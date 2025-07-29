import { configureStore } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { rootReducer } from './rootReducer'
import logger from 'redux-logger'

const useLogger = process.env.NODE_ENV !== 'production'

const initializeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      useLogger
        ? getDefaultMiddleware().concat(logger)  // ✅ thunk는 기본 포함됨
        : getDefaultMiddleware(),
  })
  return store
}

export function useStore() {
  const store = useMemo(() => initializeStore(), [])
  return store
}
