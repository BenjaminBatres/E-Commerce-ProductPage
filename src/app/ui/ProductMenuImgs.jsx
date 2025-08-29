import Image from "next/image";
import React from "react";

export default function ProductMenuImgs({ productThumbnail }) {
  return (
    <div className={`w-[20%] rounded-2xl`}>
      <Image
        className={`rounded-xl `}
        src={productThumbnail.thumbnail}
        alt="product image"
      ></Image>
    </div>
  );
}
