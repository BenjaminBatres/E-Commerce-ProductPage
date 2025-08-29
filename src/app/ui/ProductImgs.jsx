import Image from "next/image";
import React from "react";

export default function ProductImgs({ productThumbnail, active, setActive, id }) {
  return (
    <div
    onClick={() => setActive(id)}
      className={`w-[20%] rounded-2xl cursor-pointer relative transition-all ease-out duration-300 ${
        active === id ? "border-[#ff7d1aff] border-2" : "hover:scale-95"
      } `}
    >
      <Image
        className={`rounded-xl relative`}
        src={productThumbnail.thumbnail}
        alt='product image'
      >
        
      </Image>
      <div className={`absolute bg-white ${active === id ? 'opacity-50' : 'opacity-0'}  rounded-[13px] top-0 h-full w-full`}></div>
    </div>
  );
}
