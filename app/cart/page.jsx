'use client'

import { fetchStorage, saveStorageSingle } from '@/utility/localStorage'
import React, { useContext } from 'react'
import { LengthCartContext } from '@/context/LengthCartContext'
import Image from 'next/image'
import Link from 'next/link'

const Cart = () => {
  const { length, setLength } = useContext(LengthCartContext)
  const products = fetchStorage('Cart')

  const deleteItem = (id) => {
    const filterData = products.filter((fl) => fl._id !== id)
    saveStorageSingle(filterData, 'Cart')
    setLength(filterData.length)
  }

  const amountToPay = () => {
    const totalValueProducts = products.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    )
    return totalValueProducts.toFixed(2)
  }

  return (
    <div className='py-8 px-24'>
      <h1 className='text-center text-xl font-bold mb-4'>Your Cart</h1>
      {length > 0 ? (
        <>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th className='max-md:hidden'>Miniature</th>
              <th>Name</th>
              <th className='text-center'>Quantity</th>
              <th className='text-right'>Price $</th>
              <th className='text-right'>Value $</th>
              <th className='text-center'>Delete</th>
            </tr>
          </thead>
          <tbody className=''>
            {products.map((el) => {
              return (
                <tr
                  key={el._id}
                  className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 '
                >
                  <td className=' h-14 max-md:hidden'>
                    <figure>
                      <Image
                        alt='Card background'
                        className='object-cover '
                        src={el.image}
                        width={50}
                        height={50}
                      />
                    </figure>
                  </td>
                  <td className='mr-2'>{el.title}</td>
                  <td className='mr-2 text-center'>{el.quantity}</td>
                  <td className='mr-2 text-right'>{el.price.toFixed(2)}</td>
                  <td className='mr-2 text-right'>{el.price.toFixed(2)}</td>
                  <td className='mr-2 text-center'>
                    <button
                      onClick={() => deleteItem(el._id)}
                      className='cursor-pointer text-lg hover:text-xl transition'
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
          <tfoot className='border-t-2 border-slate-500'>
            <tr className='text-right'>
              <td colSpan="6">
                Amount to pay:{' '}
                <span className='text-xl font-medium'>{amountToPay()} $</span>
              </td>
            </tr>
          </tfoot>
          
        </table>
         <div className='text-right'>
         <a
           className=' btn btn-success mx-auto my-4   '
           href='https://www.paypal.com/signin?returnUri=https%3A%2F%2Fwww.paypal.com%2Fmyaccount%2Ftransfer&state=%2F'
           target='_blank'
         >
          I pay by card
         </a>
       </div>
       </>
     
      ) : (
        <div className='flex flex-col items-center mt-4'>
          <p className=' text-xl text-red-500'>Cart is empty!</p>
          <Link
            href={'/'}
            className='btn btn-success hover:bg-emerald-500 py-2 px-4 mx-auto my-4 rounded-lg shadow-lg transition'
          >
            Back to the store
          </Link>
        </div>
      )}
    </div>
  )
}

export default Cart
