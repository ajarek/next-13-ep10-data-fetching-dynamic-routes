'use client'
import { fetchStorage } from '@/utility/localStorage'
import Image from 'next/image'
const Cart = () => {
  const products = fetchStorage('Cart')

  return (
    <div className='py-8 px-24'>
      <h1 className='text-center text-xl font-bold mb-4'>Your Cart</h1>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th className='max-md:hidden'>Miniature</th>
            <th>Name</th>

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
      </table>
    </div>
  )
}

export default Cart
