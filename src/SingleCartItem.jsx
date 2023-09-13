import {AiFillDelete,AiOutlinePlusCircle} from 'react-icons/ai'
import {GrSubtractCircle} from 'react-icons/gr' 

const SingleCartItem = () => {
  return (
    <div>
        
      {/* single cart item */}

     <div className='bg-base-100 p-3 rounded-md'>
     <div className="flex  items-center">
        <img className="w-10 h-10 mr-2" src="https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg" alt="" />
        <div>
            <h2 className='text-gray-500'>MBJ Women's Solid Short </h2>
           
            <span className='text-gray-400 text-sm mr-2'>Price: $200</span>
            <span className='text-gray-400 text-sm'>Color: <span className='w-3 h-3 bg-green-700 rounded-full inline-block'></span></span>
        </div>
        <div>
          <button><AiFillDelete className='text-red-600 text-xl ml-2' /> </button>
        </div>
      </div>
      {/* increase || decrease product */}
      <div className='flex justify-between'>
        {/* button */}
        <div className='flex gap-3'>
          <button className='ml-4 text-gray-400 text-base'><GrSubtractCircle /></button>
          <p className='text-gray-400 text-base'>$900</p>
          <button className='text-gray-400 text-base'><AiOutlinePlusCircle /></button>
        </div>
        {/* total price */}
        <p className='text-gray-400 text-base'>Totall: $ 500</p>
      </div>
     </div>

    </div>
  )
}

export default SingleCartItem