import React from "react";

const FourLay = ({img1,img2,img3,img4}) => {
  return (
    <div className="h-[16rem] w-[20rem]   flex justify-between flex-wrap bg-gray-200 items-center">

      <div className="w-full flex justify-between">

      <div className="">
        <img src={img1} alt="" width={150} />
      </div>

      <div className="">
        <img src={img2} alt="" srcset=""width={150} />
      </div>

      </div>


      <div className="w-full flex justify-between">

      <div className="">
        <img src={img1} alt="" width={150} />
      </div>
      <div className="">
        <img src={img2} alt="" srcset=""width={150} />
      </div>

      </div>
    </div>
  );
};

export default FourLay;
