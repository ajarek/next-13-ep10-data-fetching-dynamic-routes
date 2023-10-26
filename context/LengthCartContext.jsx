'use client'
import { fetchStorage } from '@/utility/localStorage'
import React, { createContext, useState,useEffect } from 'react'
export const LengthCartContext = createContext()

export const LengthCartProvider = ({ children }) => {
  const [length, setLength]=useState(0)
  useEffect(()=>{
    const newLength=fetchStorage('Cart')
    if(newLength)
    {setLength(newLength.length)}
  },[length])

  return (
    <LengthCartContext.Provider value={{ length, setLength }}>
      {children}
    </LengthCartContext.Provider>
  )
}