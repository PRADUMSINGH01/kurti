import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { wish } from "./store/wishlist";
import Loading from "./components/Loading";
const Kurti = () => {
  const data = useSelector((state) => state.API.data);
  const dispatch = useDispatch();

  return (
    <div className="w-full flex  justify-between flex-wrap -z-100">
      <div className="hidden w-[6rem] h-[100rem] md:w-[12rem] lg:w-[16rem] bg-slate-400 lg:block mt-16 ">
        hello
      </div>

      <div className="w-[80%] flex flex-wrap justify-between">
        {data
          ? data.map((items) => {
              return (
                <>
                  <div className="mt-40 ml-10 md:ml-0 ">
                    <a
                      href={items.id}
                      class="group  mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3"
                    >
                      <img
                        src={items.thumbnail}
                        loading="lazy"
                        alt="Photo by Galina N"
                        class="h-[20rem] w-[20rem] object-cover object-center transition duration-200 group-hover:scale-110"
                      />
                    </a>

                    <div>
                      <a
                        href="#"
                        class="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg"
                      >
                        {items.brand}
                      </a>

                      <div class="flex items-end gap-2">
                        <span class="font-bold text-gray-800 lg:text-lg">
                          Rupees: {items.price}
                        </span>
                      </div>
                    </div>


                    <div className="flex justify-around">

                      <button className="w-20 h-10 bg-slate-200">Buy</button>
                      <button className="w-20 h-10 bg-indigo-600 text-white font-custom" onClick={()=>dispatch(wish(items))}>Add</button>

                    </div>
                  </div>
                </>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default Kurti;
