import { useState } from "react"
import { useEffect } from "react"
import Product from "./Product"


const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
  return (
    <div className='flex-1'>
        <div className="flex justify-around items-center mb-5">
             <h1>Products : {products.length}</h1>
             <form className="form-control">
             {/* <div > */}
                <div className="input-group flex-1">
                    <input type="text" placeholder="Search…" className="input  input-bordered outline-none" />
                    <button className="btn btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
                {/* </div> */}
             </form>
        </div>
        <div className="md:grid md:grid-cols-2 gap-3">
            {
                products.slice(0,4).map(product =>(
                    <Product key={product.id} product={product} />
                ))
            }
        </div>

        {/* see all */}
        <div className="text-center">
        <button className="bg-orange-400 text-base px-4 my-7  text-white py-2 rounded-md">See All Products</button>
        </div>
    </div>
  )
}

export default Products