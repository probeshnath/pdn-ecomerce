import './App.css'
import Cart from './Cart'
import Filter from './Filter'
import Navbar from './Navbar'
import Products from './Products'

function App() {


  return (
    <>
    <Navbar />
    <div className="md:flex gap-5 my-10">
      <Filter />
      <Products />
      <Cart />
    </div>
    </>
  )
}

export default App
