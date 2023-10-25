import React from 'react'
import Image from 'next/image'
import ButtonAddCart from '@/components/ButtonAddCart'

async function getData(id) {
  const res = await fetch(`https://jsonserver.reactbd.com/phone/${id}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const EditProduct = async ({ params }) => {
  const data = await getData(params.id)
  const { _id, title, description, image, brand, price, category } = data

  return (
    <div className='px-24 grid grid-cols-2 place-items-center'>
      <div>
        <p>pageID: <span className='font-bold'>{_id}</span></p>
        <p>title: <span className='font-bold'>{title}</span></p>
        <p>description: <span className='font-bold'>{description}</span></p>
        <p>brand: <span className='font-bold'>{brand}</span></p>
        <p>category: <span className='font-bold'>{category}</span></p>
        <p >price: <span className='font-bold'>{price}</span>$</p>
        <ButtonAddCart id={_id}/>
      </div>
      <div>
        <Image
          alt='Card background'
          className='object-cover '
          src={image}
          width={500}
          height={500}
        />
      </div>
    </div>
  )
}

export default EditProduct
