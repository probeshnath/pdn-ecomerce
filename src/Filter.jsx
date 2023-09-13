

const Filter = () => {
  return (
    <div className="flex flex-col gap-3 text-center">
      <h2 className="text-2xl font-semibold">Filter</h2>

      <button className="bg-green-300 py-2 rounded-md">Order By A-Z</button>

      {/* price filter */}
      <div>
        <select className="select select-success  w-full max-w-xs">
          <option disabled selected>Pick your favorite anime</option>
          <option value={"500"}>0 - $500</option>
          <option value={"1000"}>0 - $1000</option>
          <option value={"1500"}>0 - $1500</option>
          <option value={"2000"}>0 - $2000</option>
          <option value={"2000"}>$2000 +</option>
        </select>
      </div>

      {/* Rating */}
        <div>
        <select className="select select-accent w-full max-w-xs">
            <option disabled selected>Rating</option>
             <option>5 stars</option>
             <option>4 stars</option>
             <option>3 stars</option>
             <option>2 stars</option>
             <option>1 star</option>
          </select>
        </div>

        {/* Brand */}
        <div>
        <select className="select select-accent w-full max-w-xs">
            <option disabled selected>Brand</option>
             <option>5 stars</option>
             <option>4 stars</option>
             <option>3 stars</option>
             <option>2 stars</option>
             <option>1 star</option>
          </select>
        </div>

    </div>
  )
}

export default Filter