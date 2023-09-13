

const Product = ({product}) => {
    console.log(product)
  return (
    <div>
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="h-[200px] my-4" src={product.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p>{product.description.slice(0,100)}</p>
                <p>Price: ${product.price}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Product