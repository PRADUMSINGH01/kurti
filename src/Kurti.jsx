import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { wish } from "./store/wishlist";
import Loading from "./components/Loading";
const Kurti = () => {
  const data = useSelector((state) => state.API.data);
  const dispatch = useDispatch();

  return (
    <>
      <div className="w-full flex  justify-between flex-wrap ">
        <div className="hidden w-[6rem] h-[100rem] md:w-[12rem] lg:w-[16rem] bg-slate-400 lg:block mt-16">
          hello
        </div>
<div className="w-[80%] flex flex-wrap justify-between" >
        {data ? (
          data.map((items) => {
            return (
              <div
            
  
                className= "position w-[20rem] h-[26rem] shadow-xl rounded-xl  border-b-slate-100  flex flex-col items-center justify-between mt-16 ml-3 "
              >
                <div className="w-[20rem] h-[16rem] rounded-xl overflow-hidden">
                  <img src={!items.thumbnail ?<Loading/>:items.thumbnail} alt="loading"></img>
                </div>
                <div className="w-[20rem] h-[3rem] overflow-hidden">
                  <h4>{items.title}</h4>
                  <p>{items.description}</p>
                </div>
                <div className="flex w-[10rem] justify-around">
                  <h1>
                    Price{" "}
                    <span className="font-bold text-lg ">{items.price}</span>
                  </h1>
                  <h4 className="">{items.rating}</h4>
                </div>

                <div className="w-[10rem] flex justify-between">
                  <div className="">
                    <button>Buy</button>
                  </div>

                  <div className="">
                    <button onClick={() => dispatch(wish(items))}>Add</button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <Loading />
        )}
</div>

      </div>
    </>
  );
};

export default Kurti;
