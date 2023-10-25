'use client'
import { fetchStorage } from "@/utility/localStorage"

const Cart = () => {
  const products=fetchStorage('Cart')
  
  return (
    <div>Cart
      {products?.map(el=>{
        return(
          <div key={el._id}>{el.title}</div>
        )
      })}
    </div>
  )
}

export default Cart