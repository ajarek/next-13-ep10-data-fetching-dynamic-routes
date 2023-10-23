import React from 'react'
import { Card, CardHeader, CardBody, Image } from '@nextui-org/react'
const ProductsList = ({data}) => {
  return (
    <div className=' gap-4 px-24 py-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4'>
    {data.map((el) => {
      return (
        
          <Card className='py-4 shadow-2xl' >
            <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
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
              />
            </CardBody>
          </Card>
        
      )
    })}
    </div>
  )
}

export default ProductsList