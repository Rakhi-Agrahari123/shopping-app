import { button } from '@material-tailwind/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItemsFromCart  } from '../redux/cartSlice'

import { addToCart } from '../redux/cartSlice'

function Cart() {
    const dispatch = useDispatch()
  const {items} = useSelector((state)=> state.cart)
  console.log(useSelector((state)=>state.Cart))
  console.log(items.length)

  const handleRemoveItem = (id) => {
    dispatch(removeItemsFromCart(id))
  }
  const subTotal = items.reduce((accu , item)=>{
    return accu + item.price * item.quantity
  },0)
  return (
    <div className='max-w-7xl mx-auto mt-2 px-8 py-12'>
      <h1 className="text-start leading-wide text-2xl mb-5 font-medium">
       Shopping Cart
      </h1>
      {
        items.length > 0 ? 
          items.map((item)=>(
             <div>
              <p>{item.name}</p>
              <img className='w-16 h-16' src={item.image}/>
             
              
              <p>price : $ {item.quantity * item.price}</p>
              <div className='flex item-center gap-4 my-2'>
                 <button>+</button>
              <p>{item.quantity}</p>
              <button>-</button>
              </div>
             
              <button onClick={()=> handleRemoveItem(item.id)} className='bg-red-500 text-white px-4 py-2'>Remove</button>

              <h1>Subtotal : $ {subTotal}</h1>
             </div>


           ))
            
         : 
          <p className='text-start text-red-500'>Your Cart is empty</p>
        
      }
    </div>
  )
}


export default Cart