import SingleCartItem from "./SingleCartItem"
import SubTotal from "./SubTotal"


const Cart = () => {
  return (
    <div className="bg-gray-100 py-5 px-3 rounded-md ">
      <h2 className="text-2xl font-extrabold mb-4">Total 10 Products</h2>
      {/* fetch all cart item */}
      <div >
        <div className="flex flex-col gap-2">
          <SingleCartItem />
          <SingleCartItem />
          <SingleCartItem />
          <SingleCartItem />
        </div>
        <div className="">
          <SubTotal />
        </div>
      </div>
    </div>
  )
}

export default Cart