import React from 'react'
import Image from 'next/image'

async function getData(id) {
  const res = await fetch(`https://jsonserver.reactbd.com/phone/${id}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const EditProduct =async ({params}) => {
  const data = await getData(params.id)
  const {_id, title,description,image} =data
  
  return (
    <div className='p-12'>
      <p>pageID:{_id}</p>
      <p>title:{title}</p>
      <p>description:{description}</p>
      <figure>
              <Image
                alt='Card background'
                className='object-cover '
                src={image}
                width={500}
                height={500}
              />
            </figure>
      </div>
  )
}

export default EditProduct