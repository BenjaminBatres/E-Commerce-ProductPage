"use client";
import Image from "next/image";
import React, { useState } from "react";
import Product1Thumbnail from "../images/image-product-1-thumbnail.jpg";
import Product1 from "../images/image-product-1.jpg";
import Product2Thumbnail from "../images/image-product-2-thumbnail.jpg";
import Product2 from "../images/image-product-2.jpg";
import Product3Thumbnail from "../images/image-product-3-thumbnail.jpg";
import Product3 from "../images/image-product-3.jpg";
import Product4Thumbnail from "../images/image-product-4-thumbnail.jpg";
import Product4 from "../images/image-product-4.jpg";
import Minus from "../images/icon-minus.svg";
import Plus from "../images/icon-plus.svg";
import Cart from "../images/icon-cart.svg";
import Close from "../images/icon-close.svg";
import ProductImgs from "../ui/ProductImgs";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ProductMenuImgs from "../ui/ProductMenuImgs";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/counterSlice";
import { useRouter } from "next/navigation";

export default function ProductInfo() {
  const productThumbnails = [
    { thumbnail: Product1Thumbnail },
    { thumbnail: Product2Thumbnail },
    { thumbnail: Product3Thumbnail },
    { thumbnail: Product4Thumbnail },
  ];

  const productImages = [Product1, Product2, Product3, Product4];

  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (count > 0) {
      dispatch(addToCart({id: 1, name: "Fall Limited Edition Sneakers", quantity: count, price: 125 }));
      router.push("/cart");
    } 
  };

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="w-full max-w-[1300px] m-auto">
      <div className="xmd:hidden">
        <Swiper modules={[Navigation, Pagination]} navigation pagination>
          <SwiperSlide>
            <Image src={productImages[0]} alt="product image" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={productImages[1]} alt="product image" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={productImages[2]} alt="product image" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={productImages[3]} alt="product image" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="xmd:py-16 px-6 2xl:px-0">
        {isOpen && (
          <div className="absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center bg-light-black z-10">
            <div className="relative max-w-[600px]">
              <div className="pt-12 pb-6">
                <Image
                  onClick={toggleOpen}
                  src={Close}
                  width={20}
                  alt="close icon"
                  className="absolute right-0 top-2 cursor-pointer"
                ></Image>
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination
                >
                  <SwiperSlide>
                    <Image
                      src={productImages[0]}
                      className="rounded-2xl "
                      alt="product image"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={productImages[1]}
                      className="rounded-2xl "
                      alt="product image"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={productImages[2]}
                      className="rounded-2xl "
                      alt="product image"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={productImages[3]}
                      className="rounded-2xl "
                      alt="product image"
                    />
                  </SwiperSlide>
                </Swiper>

                <div className="flex mt-10 flex-wrap justify-between">
                  {productThumbnails.map((productThumbnail, id) => (
                    <ProductMenuImgs
                      productThumbnail={productThumbnail}
                      id={id}
                      key={id}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col xmd:flex-row">
          <div className="w-full xmd:w-[40%] lg:w-[35%] hidden xmd:block">
            <Image
              onClick={toggleOpen}
              src={productImages[active]}
              alt="product"
              className="rounded-2xl cursor-pointer"
            ></Image>

            <div className="flex mt-10 flex-wrap justify-between">
              {productThumbnails.map((productThumbnail, id) => (
                <ProductImgs
                  productThumbnail={productThumbnail}
                  setActive={setActive}
                  id={id}
                  key={id}
                  active={active}
                />
              ))}
            </div>
          </div>

          <div className="w-full xmd:w-[60%] px-0 py-6 md:py-12 xmd:pl-8 lg:px-10 xl:px-26 lg:py-14 ">
            <div className="text-gray-500 font-bold uppercase tracking-[0.1rem] mb-4">
              Sneakers Company
            </div>
            <div className="font-bold text-[37px] xmd:text-5xl mb-8 ">
              Fall Limited Edition <br /> Sneakers
            </div>
            <p className="text-gray-500 max-w-[450px] mb-6">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <div className="flex justify-between md:block md:justify-start mb-10">
              <div className="flex mb-3">
                <div className="text-3xl font-extrabold mr-2">$125.00 </div>
                <div className="bg-black text-white p-2 font-semibold text-[18px] rounded-[5px]">
                  50%
                </div>
              </div>
              <div className="line-through text-gray-500 font-semibold">
                $250.00
              </div>
            </div>

            <div className="flex flex-col xmd:flex-row gap-4">
              <div className="flex w-full items-center justify-between xmd:w-[150px] bg-gray-100 py-5 px-3 rounded-[5px] ">
                <button
                  onClick={() => setCount(count - 1)}
                  disabled={count <= 1}
                  className="cursor-pointer"
                >
                  <Image src={Minus} alt="minus icon"></Image>
                </button>
                <span className="font-bold">{count}</span>
                <button className="cursor-pointer">
                  <Image
                    src={Plus}
                    alt="plus icon"
                    onClick={() => setCount(count + 1)}
                  ></Image>
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex gap-4 justify-center bg-[#ff7d1aff] py-5 md:px-13  lg:px-23 rounded-[10px] cursor-pointer"
              >
                <Image src={Cart} alt="cart icon"></Image>
                <span className="font-bold">Add to cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
