/* eslint-disable react-hooks/exhaustive-deps */
import './App.css'
import Cart from './Cart'
import Filter from './Filter'
import Navbar from './Navbar'
import Products from './Products'
import { useEffect, useState } from "react"

function App() {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  const handleAddProduct = (product) =>{
    // console.log(product)
    let isExist = cart.find((item) => item.id === product.id)

    if(isExist){
      return alert("This product already ")
    }else if(total > 2000 ){
      return alert("Sorry!! You cross your limit..")
    }

    setCart([...cart, product])
  }
  const handleRemoveProduct = (id) =>{
    const data = cart.filter(item => item.id !== id)
    setCart(data)
  }
  
  useEffect(()=>{
    let totalPrice = 0;
    
    cart.forEach((item)=>{
      // console.log("from subtotal",item)
      totalPrice = totalPrice + item.price;
      setTotal(totalPrice )
    })
  },[cart,handleRemoveProduct])


  console.log(cart)

  return (
    <>
    <Navbar cart={cart} />
    <div className="md:flex gap-5 my-10">
      <Filter />
      <Products handleAddProduct={handleAddProduct} />
      <Cart cart={cart} total={total} handleRemoveProduct={handleRemoveProduct} />
    </div>
    </>
  )
}

export default App
