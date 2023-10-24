import Image from 'next/image'
import React from 'react'

const ProductsList = ({data}) => {
  return (
    <div className=' gap-4 px-8 py-8 grid grid-cols-1 sm:px-12 sm:grid-cols-2 xl:px-24 xl:grid-cols-4'>
    {data.map((el) => {
      return (
        <div className="card w-full  shadow-2xl  border-2 hover:border-emerald-400 ease-in duration-300  cursor-pointer">
        <figure>
        <Image
                alt='Card background'
                className='object-cover rounded-xl'
                src={el.image}
                width={270}
                height={270}
              /> 
        </figure>
        <div className="card-body">
          <h2 className="card-title">{el.title}</h2>
          <p>{el.brand}</p>
          <h3 className='font-bold'>{el.price}$</h3>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div> 
        
        
      )
    })}
    </div>
  )
}

export default ProductsList
{/* <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
              <p className='text-tiny uppercase font-bold'>{el.price}$</p>
              <small className='text-default-500'>{el.brand}</small>
              <h4 className='font-bold text-large'>{el.title}</h4>
            </CardHeader>
            <CardBody className='overflow-visible py-2'>
              <Image
                alt='Card background'
                className='object-cover rounded-xl'
                src={el.image}
                width={270}
              /> */}