import React from "react";
import { useSelector } from "react-redux";
const WishList = () => {
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  let total = 0;
wishlist.map((item)=>{
  return total+=item.price
})
  return (
    <div className="mt-80 ml-20 flex flex-col justify-between">
      {wishlist.length <= 0
        ? "Add some things"
        : wishlist.map((item) => {
  
            return <div className="flex items-center justify-around"key={item.id} >
              <img src={item.thumbnail} alt="" width={200} />
              <div className="flex">
              <h1>{item.title}</h1> <span>{item.brand}</span>

              </div>
              <div className="">
                <p>RS <span>{item.price}</span></p>
              </div>
              <div className="">
                <p>color:red</p>
              </div>

            </div>;
          })}


          <div className="">total:{total}</div>
    </div>
  );
};

export default WishList;
