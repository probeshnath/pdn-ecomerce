/* eslint-disable react/prop-types */
import SingleCartItem from "./SingleCartItem"
import SubTotal from "./SubTotal"


const Cart = ({cart,handleRemoveProduct,total}) => {
  // console.log("from caty",cart)

 

  return (
    <div className="bg-gray-100 py-5 px-3 rounded-md ">
      <h2 className="text-2xl font-extrabold mb-4">Total {cart.length} Products</h2>
      {/* fetch all cart item */}
      <div >
        <div className="flex flex-col gap-2">
          
          {
            cart.map((item,index) =>(
              <SingleCartItem handleRemoveProduct={handleRemoveProduct} item={item} key={index} />
            ))
          }
          
        </div>
        <div className="">
          <SubTotal  total={total} />
        </div>
      </div>
    </div>
  )
}

export default Cart