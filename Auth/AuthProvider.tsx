'use client'

import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext';
import { authReducer } from './auth-reducer';
import { user } from './data';


export default function AuthProvider({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const [state, dispatch] = useReducer(authReducer, user)
  return (
    <AuthContext.Provider value={{state, dispatch}}>
        { children }
    </AuthContext.Provider>
  )
}
