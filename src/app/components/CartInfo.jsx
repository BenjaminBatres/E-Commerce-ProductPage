"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGreaterThan } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";
import Product from "../images/image-product-1-thumbnail.jpg";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateCartQuantity } from "../redux/counterSlice";

export default function CartInfo() {
  const cartAmount = useSelector((state) => state.counter.items);
  const dispatch = useDispatch();
  const total = () => {
    let itemPrice = 0;
    cartAmount.forEach((item) => {
      itemPrice += +(item.price * item.quantity).toFixed(2);
    });
    return itemPrice;
  };

  return (
    <div className="w-full max-w-[1300px] m-auto">
      <div className="py-9 px-6 2xl:px-0">
        <div className="flex gap-4 mb-8">
          <div className="text-gray-400 flex items-center gap-4">
            <Link href={"/"}>Home</Link>
            <span className="text-xs">
              <FaGreaterThan />
            </span>
          </div>
          <div className="text-[#ff7d1aff]">Cart</div>
        </div>
        {cartAmount.length === 0 && (
          <>
            <div className="bg-[#ff7d1aff] text-white py-[15px] pr-[15px] pl-[15px] md:pl-[45px] mb-7">
              Your cart is currently empty.
            </div>
            <Link
              href={"/"}
              className="uppercase bg-[#ff7d1aff] text-white py-[14px] px-[30px] font-semibold tracking-[2px]"
            >
              Return to shop
            </Link>
          </>
        )}
        {cartAmount.length > 0 && (
          <>
            <div className="border-1 border-gray-200 rounded-[5px] mb-10">
              <div className="hidden md:flex items-center border-b-1 border-gray-200">
                <div className="flex-1"></div>
                <div className="flex-3 font-semibold text-[#5f5d5d] uppercase">
                  Product
                </div>
                <div className="flex flex-1/12">
                  <div className="font-semibold text-[#5f5d5d] uppercase pt-[15px] px-[19px] pb-[11px]">
                    Price
                  </div>
                  <div className="font-semibold text-[#5f5d5d] uppercase pt-[15px] px-[19px] pb-[11px]">
                    Quantity
                  </div>
                  <div className="font-semibold text-[#5f5d5d] uppercase pt-[15px] px-[19px] pb-[11px]">
                    Subtotal
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="flex flex-col md:flex-row md:items-center flex-3">
                    <div className="text-2xl text-[#5f5d5d] pt-[17px] px-[19px] pb-[15px] border-b-1 border-gray-200 md:border-0">
                      {cartAmount.map((item) => (
                        <TiDelete
                          className="cursor-pointer"
                          key={item.id}
                          onClick={() => dispatch(removeFromCart(item.id))}
                        />
                      ))}
                    </div>
                    <figure className="pt-[17px] px-[19px] pb-[15px] border-b-1 border-gray-200 md:border-0">
                      <Image
                        src={Product}
                        alt="product"
                        className="h-25 w-25"
                      ></Image>
                    </figure>
                    <div className="pt-[17px] px-[19px] pb-[15px] text-gray-600 border-b-1 border-gray-200 md:border-0">
                      Fall Limited Edition Sneakers
                    </div>
                  </div>
                  {cartAmount.map((item) => (
                    <div
                      className="flex flex-col md:flex-row md:items-center flex-1"
                      key={item.id}
                    >
                      <div className="pt-[17px] pl-[19px] md:pl-0 pr-[19px] pb-[15px] text-gray-600 border-b-1 border-gray-200 md:border-0">
                        ${item.price.toFixed(2)}
                      </div>
                      <div className="pt-[17px] px-[19px] pb-[15px] border-b-1 border-gray-200 md:border-0">
                        <input
                          key={item.id}
                          type="number"
                          max={99}
                          min={0}
                          className="w-[3.631rem] text-center border-1 rounded-[3px]"
                          value={item.quantity}
                          onChange={(e) =>
                            dispatch(
                              updateCartQuantity({
                                id: item.id,
                                quantity: +e.target.value,
                              })
                            )
                          }
                        />
                      </div>
                      <style jsx>{`
                        input[type="number"]::-webkit-inner-spin-button,
                        input[type="number"]::-webkit-outer-spin-button {
                          -webkit-appearance: none;
                          margin: 0;
                        }
                        input[type="number"] {
                          -moz-appearance: textfield;
                        }
                      `}</style>
                      <div className="pt-[17px] px-[19px] md:px-[35px] pb-[15px] text-gray-600">
                        ${(total() * 0.9).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-[25px] font-bold mb-7">Cart totals</div>
            <div className="border-1 border-gray-200 rounded-[5px] mb-7">
              <div className="border-b-1 border-gray-200 flex">
                <div className="flex-1 pt-[16px] px-[15px] pb-[14px] text-[#5f5d5d] font-semibold uppercase">
                  Subtotal
                </div>
                <div className="sm:flex-2 pt-[16px] px-[15px] pb-[14px] text-[#5f5d5d] font-semibold uppercase">
                  ${(total() * 0.9).toFixed(2)}
                </div>
              </div>
              <div className="border-b-1 border-gray-200 flex">
                <div className="flex-1 pt-[16px] px-[15px] pb-[14px] text-[#5f5d5d] font-semibold uppercase">
                  Tax
                </div>
                <div className="sm:flex-2 pt-[16px] px-[15px] pb-[14px] text-[#5f5d5d] font-semibold uppercase">
                  ${(total() * 0.1).toFixed(2)}
                </div>
              </div>
              <div className="flex">
                <div className="flex-1 pt-[16px] px-[15px] pb-[14px] text-[#5f5d5d] font-semibold uppercase">
                  Total
                </div>
                <div className="sm:flex-2 pt-[16px] px-[15px] pb-[14px] text-[#5f5d5d] font-semibold uppercase">
                  ${total().toFixed(2)}
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="py-[15px] px-[30px] bg-[#ff7d1aff] text-white text-[17px] font-semibold uppercase cursor-not-allowed">
                Procceed to checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
