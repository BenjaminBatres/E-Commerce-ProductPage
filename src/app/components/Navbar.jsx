"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../images/logo.svg";
import Cart from "../images/icon-cart.svg";
import Profile from "../images/image-avatar.png";
import Menu from "../images/icon-menu.svg";
import Close from "../images/icon-close.svg";
import { useSelector } from "react-redux";
import Link from "next/link";
export default function Navbar() {
  const links = [
    {
      label: "Collections",
    },
    {
      label: "Men",
    },
    {
      label: "Women",
    },
    {
      label: "About",
    },
    {
      label: "Contact",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const cartAmount = useSelector((state) => state.counter.items);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <nav className="h-[100px] xmd:h-[130px] border-b-1 border-gray-200 flex items-center justify-between max-w-[1400px] w-full m-auto px-6 xmd:px-12 2xl:px-0">
      <div className="flex gap-6 xmd:gap-16">
        <Image
          src={Menu}
          className="visible xmd:hidden w-5 h-5 cursor-pointer"
          onClick={toggleOpen}
          alt="close"
        ></Image>
        <Link href={"/"}>
          <Image src={Logo} alt="logo"></Image>
        </Link>
        <ul className="hidden xmd:flex gap-8">
          {links.map((link, id) => (
            <li key={id} className="text-gray-400 cursor-not-allowed">
              {link.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="h-screen relative">
        <div
          className={`fixed top-0 left-[0%] h-full w-50 bg-white shadow-lg z-10 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="px-2 py-4 flex justify-between items-center border-gray-400 border-b">
            <Image src={Logo} alt="logo"></Image>
            <Image
              src={Close}
              className="cursor-pointer"
              onClick={toggleOpen}
              alt="close icon"
            ></Image>
          </div>
          <ul className="flex flex-col gap-8 py-6 px-4">
            {links.map((link, id) => (
              <li key={id} className="text-gray-400 cursor-not-allowed text-lg">
                {link.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center gap-6 xmd:gap-12">
        <Link href={"/cart"} className="relative">
          <Image src={Cart} alt="cart icon"></Image>
          <div
            className={`absolute -top-[5px] -right-[5px] text-white text-xs px-[5px] py-[2px] rounded-[10px] ${
              cartAmount.map((item) => item.quantity) <= 0
                ? ""
                : "bg-[#ff7d1aff]"
            }`}
          >
            {cartAmount.map((item) => item.quantity) <= 0
              ? ""
              : cartAmount.map((item) => item.quantity) > 9
              ? "9+"
              : cartAmount.map((item) => item.quantity)}
          </div>
        </Link>

        <Image
          src={Profile}
          className="h-10 w-10 xmd:h-15 xmd:w-15 cursor-not-allowed"
          alt="profile"
        ></Image>
      </div>
    </nav>
  );
}
