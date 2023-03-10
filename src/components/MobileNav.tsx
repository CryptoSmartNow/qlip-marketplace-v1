import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
// import { Close } from "@material-ui/icons";
import ConnectWallet from './ConnectWallet'

function MobileNav(){
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
     <header className='header'>
      <div className="flex flex-row  text-center justify-between flex-wrap w-full">
        <div className=' inline-flex p-3'>
          <Link href="/"><img src="/img/logo.png" alt="" /></Link>  
          </div>
        <div>
          <button
          className='ml-auto flex p-3 rounded text-white hover:text-white outline-none md:hidden'
          onClick={handleClick}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          </button>
          </div>
        {/* ternary operator */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="inline-flex  ml-auto w-auto items-start flex-col h-auto bg-black">
            <Link href="/">
              <div className="inline-flex lg:w-auto px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-600 hover:text-white ">
                Marketplace
              </div>
            </Link>
            <Link href="/auction">
              <div className="inline-flex w-auto px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-600 hover:text-white">
                Live Auction
              </div>
            </Link>
            <Link href="/nft">
              <div className="inline-flex w-auto  px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-600 hover:text-white">
                Qlip NFTs
              </div>
            </Link>
            <Link href="/community">
              <div className="inline-flex w-auto  px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-600 hover:text-white">
                Community
              </div>
            </Link>
            <Link href="/community">
              <div className="inline-flex w-auto  px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-600 hover:text-white">
                Mint Store
              </div>
            </Link>

            <div className='w-auto px-3 py-2 text-white font-bold items-center justify-center hover:bg-blue-600 hover:text-white border-[#5127DA] border-2 rounded-full cursor-pointer'>
            <ConnectWallet />
          </div>
          </div>
        </div>
      </div>
      </header>
    </>
  );
};
export default MobileNav;