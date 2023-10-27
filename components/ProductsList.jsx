import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductsList = ({ data }) => {
  return (
    <div className=' gap-4 px-8 py-8 grid grid-cols-1 sm:px-12 sm:grid-cols-2 md:grid-cols-3 xl:px-24 xl:grid-cols-4'>
      {data.map((el) => {
        return (
          <Link key={el._id} href={`/${el._id}`}>
          <div className='card w-full  shadow-2xl  border-2 hover:border-emerald-400 ease-in duration-300  cursor-pointer'>
            <figure>
              <Image
                alt='Card background'
                className='object-cover '
                src={el.image}
                width={500}
                height={500}
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>{el.title}</h2>
              <p>{el.brand}</p>
              <h3 className='font-bold'>{el.price}$</h3>
            </div>
          </div>
          </Link>
        )
      })}
    </div>
  )
}

export default ProductsList

