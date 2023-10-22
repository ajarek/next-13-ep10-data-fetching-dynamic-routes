import { User } from '@nextui-org/react'
import Image from 'next/image'

async function getData() {
  const res = await fetch('https://jsonserver.reactbd.com/phone')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
export default async function Home() {
  const projects = await getData()
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {projects.map(el=>{
        return(
          <div className='text-red-500' key={el.id}>
            <p>{el.title}</p>
            <Image
            src={el.image}
            width={500}
            height={500}
            alt='picture product'
            />
          </div>
        )
       
      })}
    </main>
  )
}
