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
      <div className="flex flex-row flex-wrap w-[100%] bg-[#00008B] delay-300 hover:scale-100 hover:bg-[#00008B] duration-300 rounded-lg divide-y">
        <div className='p-1 mr-auto'>
          <Link href="/"><img src="/img/logo.png" alt="" /></Link>  
          </div>

        <div>
          <button
          className='p-1 flex-1 rounded text-white hover:text-white outline-none'
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
          } w-[40vh] h-[40vh] lg:inline-flex lg:grow lg:item-center p-3 `}
        > 
          <div className="">
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