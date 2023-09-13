/* eslint-disable react/prop-types */



const SubTotal = ({total}) => {

  return (
    <div className="bg-base-100 p-3 rounded-md mt-10 flex flex-col gap-2">
        <h2>SubTotal</h2>
        <hr />
        <h3>Total: ${total.toFixed(2)}</h3>
       {/* <p> Dalivary Fee: $20</p>
       <hr />
       <p>Discount: $10</p>
       <hr />
       <h6>Total: ${(total.toFixed(2) + 20) - 10 }</h6> */}
       <button className="bg-yellow-500 text-white py-2 rounded-md">Purchase Now</button>
    </div>
  )
}

export default SubTotal