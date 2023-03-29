import React ,{memo}from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsFillBagDashFill,BsSearch  ,BsFillCartCheckFill} from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { wish } from "../store/wishlist";
import WishList from "./WishList";

const Navbar = () => {
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  return (
    <>
    <div className="flex justify-between items-center shadow-xl bg-white border-b-gray-400 h-16 fixed w-full top-0 box-border z-1">
      <div className="text-2xl ml-3 text-blue-900 font-custom font-bold">
        <Link to={"/"}>
        <h6 >
    
          kurti<span className="text-blue-900 font-custom text-sm">shop.com</span>
        </h6>
        </Link>
      </div>
      <div className="hidden md:flex lg:w-[25rem] border  border-blue-100  shadow-sm h-[2rem] ">
        <input type="text" placeholder=" search here " className="w-full outline-none placeholder:text-xl font-custom text-center uppercase text-blue-900" />
        <div className="p-0.5 text-2xl  text-blue-900 ">
       <BsSearch/>

        </div>

      </div>
      <div className="hidden md:flex lg:flex w-[15rem] justify-between font-custom  font-bold text-blue-900 text-xl">
        <Link to={"/Kurti"}>Kurti</Link>
        <Link to={"/bag"}>Bag</Link>
        <Link to={"/beauty"}>Beauty</Link>
      </div>

      <div className="flex md:hidden lg:hidden w-[1rem] justify-between font-custom  font-bold text-blue-900 text-lg">
        <Link to={"/Kurti"}>Kurti</Link>
       
      </div>



      <div className="flex w-[8rem] justify-between items-center  md:w-[12rem]  text-blue-900">
        <div className="flex flex-col  items-center">
          <Link to={'/wishList'} className="font-bold text-blue-900 text-xl">
            <BsFillBagDashFill />
          </Link>
          <Link className="hidden md:block lg:block">{wishlist.length>0?wishlist.length:"wishList"}</Link>
        </div>
   
          <div className="flex flex-col  items-center">
            <Link  to={'/Cart'} className="font-bold text-blue-900 text-xl">
              <BsFillCartCheckFill  className="font-bold"/>
            </Link>
            <Link to={'/Cart'} className="hidden md:block lg:block">Cart</Link>
          </div>
    

        <div className="flex flex-col  items-center mr-5">
          <Link to={'/Profile'} className="font-bold text-blue-900 text-xl">
            <MdAccountCircle />
          </Link>
          <Link to={'/Profile'} className="hidden md:block lg:block">Profile</Link>
        </div>
      </div>
    </div>



 <div className=" w-full bg-blue-900 h-[2rem] flex items-center justify-around md:hidden lg:hidden">
    <div className="w-[8rem] flex justify-between text-white uppercase text-xs">
    <Link to={'/kurti'}> kurti</Link>
    <Link to={'/kurti'}> bag</Link>
    <Link to={'/kurti'}> Beauty</Link>
    </div>
<div className="flex h-[1.5rem] w-[10rem] items-center  bg-white">
    <input type="text"  className="w-full outline-none text-xs text-center uppercase font-custom" placeholder="search here"/>
    <div className="text-xl text-blue-900 p-1 ">
    <BsSearch/>
    </div>
</div>

 </div>
    </>
  );
};

export default memo(Navbar);
