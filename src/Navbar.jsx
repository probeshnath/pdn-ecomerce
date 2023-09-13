import {RiAccountCircleLine} from 'react-icons/ri'

const Navbar = () => {
  return (
    <>
        <div className="navbar">
            <div className="navbar-start">          
                <a className="normal-case font-extrabold text-2xl cursor-pointer">PDN-SAFTWARE</a>
            </div>
            <div className="navbar-center">
                
                <ul  className="flex gap-2 font-bold  bg-base-100  rounded-box w-52">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Portfolio</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                <RiAccountCircleLine className='text-xl' />
                </button>
                <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                    <span className="badge badge-xs p-2 badge-primary indicator-item">10</span>
                </div>
                </button>
            </div>
            </div>
    
    </>
  )
}

export default Navbar