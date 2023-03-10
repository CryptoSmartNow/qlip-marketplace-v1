import Link from 'next/link'
// import Image from 'next/image'

function Footer() {
  return (
    <footer className='block lg:flex bg-black px-20 py-10 text-white'>
      <div className='py-10'>
        <img src="/img/logo.png" alt="Qlip logo" />
      </div>
      <div className='flex lg:ml-60'>
        <ul>
          <li className='pt-4 text-[18px]'>
            <Link href='/'>Mint Store</Link>
          </li>
          <li className='pt-4 text-[18px]'>
            <Link href='/'>Marketplace</Link>
          </li>
          <li className='pt-4 text-[18px]'>
            <Link href='/'>Roadmap</Link>
          </li>
          <li className='pt-4 text-[18px]'>
            <Link href='/'>QLIP Token</Link>
          </li>
          <li className='pt-4 text-[18px]'>
            <Link href='/'>Whitepaper</Link>
          </li>
        </ul>
        <ul className='pl-10 lg:pl-56'>
          <li className='pt-4 text-[18px]'>
            <Link href='/'>Twitter</Link>
          </li>
          <li className='pt-4 text-[18px]'>
            <Link href='/'>Telegram</Link>
          </li>
          <li className='pt-4 text-[18px]'>
            <Link href='/'>Youtube</Link>
          </li>
          <li className='pt-4 text-[18px]'>
            <Link href='/'>Medium</Link>
          </li>
        </ul>
      </div>

    </footer>
     
  )
}

export default Footer