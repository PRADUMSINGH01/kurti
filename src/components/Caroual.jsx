import React, { useState, useEffect, memo } from "react";
import { FiChevronLeft, FiChevronRight,  } from "react-icons/fi";
import img1 from "../asset/1.jpg";
import img2 from "../asset/2.jpg";
import img3 from "../asset/3.jpg";
import img4 from "../asset/4.jpg";
import img5 from "../asset/5.jpg";
const data = [img1, img2, img3, img4, img5];
const Caroual = () => {
  const [slide, setslide] = useState(0);

  return (
    <div className="flex justify-between w-full border-box mt-10">
      <button onClick={() => setslide(slide + 1)}>
        {" "}
        <FiChevronLeft />{" "}
      </button>
      <div className="h-[10rem]">
        <img src={data[slide]} alt="" className="object-contain"  loading="lazy"/>
      </div>
      <button onClick={() => setslide(slide - 1)}>
        {" "}
        <FiChevronRight />{" "}
      </button>
    </div>
  );
};

export default memo(Caroual);
