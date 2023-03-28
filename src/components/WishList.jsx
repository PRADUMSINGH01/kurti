import React from "react";
import { useSelector } from "react-redux";
const WishList = () => {
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  return (
    <div>

        {

            wishlist.map((item)=>{
              return <>{item.brand}</>
            })






        }
   






    </div>
  );
};

export default WishList;
