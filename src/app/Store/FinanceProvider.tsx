'use client'

import React, { useReducer } from 'react'
import { FinanceContext } from './FinanceContext'
import { financeReducer } from './finance-reducer';
import { finances } from './data';


export default function FinanceProvider({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const [state, dispatch] = useReducer(financeReducer, finances)
  return (
    <FinanceContext.Provider value={{state, dispatch}}>
        { children }
    </FinanceContext.Provider>
  )
}
