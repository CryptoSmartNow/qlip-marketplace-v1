import Link from 'next/link'
import ConnectWallet from './ConnectWallet'
function Header() {
  return (
    <header className='header'>
      <div className='pt-2'>
        <Link href="/"><img src="/img/logo.png" alt="Qlip logo" /></Link> 
      </div>
        <ul className='flex space-x-[75px] text-[#fff] font-dm text-[18px] font-semibold'>
          <li className='pt-2'>
            <Link href="/">Marketplace</Link>
          </li>
          <li className='pt-2'>
            <Link href="/about">Live Auctions</Link>
          </li>
          <li className='pt-2'>
            <Link href="/blog/hello-world">QLIP NFTs</Link>
          </li>
          <li className='pt-2'>
            <Link href="/blog/hello-world">Community</Link>
          </li>
          <li className='pt-2'>
            <Link href="/blog/hello-world">Mint Store</Link>
          </li>
          <div className='px-10 py-2 border-[#5127DA] border-2 rounded-full cursor-pointer'>
            <ConnectWallet />
          </div>
        </ul>
    </header>
    
  )
}

export default Header