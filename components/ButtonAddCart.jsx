'use client'
import { useRouter } from 'next/navigation'
import { saveStorage } from '@/utility/localStorage' 
async function getData(id) {
  const res = await fetch(`https://jsonserver.reactbd.com/phone/${id}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}


const ButtonAddCart = async({id}) => {
  const router = useRouter()
  const data = await getData(id)
 
  
  const  addCart= ()=>{
    saveStorage(data,'Cart')
    router.push('/cart')
   
  }
  return (
    <button onClick={()=>addCart(id)} className="btn btn-success mt-4">Add to cart</button>
  )
}

export default ButtonAddCart