'use client'

import { useRouter } from 'next/navigation'
import { saveStorage, fetchStorage } from '@/utility/localStorage'
import React, { useContext } from 'react'
import { LengthCartContext } from '@/context/LengthCartContext'

async function getData(id) {
  const res = await fetch(`https://jsonserver.reactbd.com/phone/${id}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

// eslint-disable-next-line @next/next/no-async-client-component
const ButtonAddCart = async ({ id }) => {
  const { length, setLength } = useContext(LengthCartContext)
  const router = useRouter()
  const data = await getData(id)

  const addCart = () => {
    const storeData = fetchStorage('Cart')
    const duble = storeData?.find((el) => el._id === id)
    if (duble) {
      alert('Item is already in cart!')
      router.push('/')
      return
    }
    saveStorage(data, 'Cart')
    router.push('/cart')
    setLength(length + 1)
  }
  return (
    <button
      onClick={() => addCart(id)}
      className='btn btn-success mt-4'
    >
      Add to cart
    </button>
  )
}

export default ButtonAddCart
