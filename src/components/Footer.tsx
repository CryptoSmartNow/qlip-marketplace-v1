import Link from 'next/link'
// import Image from 'next/image'

function Footer() {
  return (
    <footer className='footer'>
      <div className = 'footer-parent'>
        <ul className=' footer-child block text-[#fff] font-dm text-[18px] font-semibold'>
            <li className='pt-2'>
                <Link href="/"><img src="/img/logo.png" alt="Qlip logo" /></Link>
            </li>
        </ul>

        <ul className=' footer-child'>
            <li className='pt-2'>
                <Link href="/">Mint Store</Link>
            </li>
            <li className='pt-2'>
                <Link href="/about">Marketplace</Link>
            </li>
            <li className='pt-2'>
                <Link href="/blog/hello-world">Roadmap</Link>
            </li>
            <li className='pt-2'>
                <Link href="/blog/hello-world">Qlip Token</Link>
            </li>
            <li className='pt-2'>
                <Link href="/blog/hello-world">Whitepaper</Link>
            </li>
        </ul>

        <ul className=' footer-child'> 
            {/* <li className='pt-2'>
                <Link href="https://www.cryptosmartnow.io/">Website</Link>
            </li>  */}
            <li className='pt-2'>
                <Link href="https://twitter.com/cryptosmartnow">Twitter</Link>
            </li>
            <li className='pt-2'>
                <Link href="https://t.me/cryptosmartcommunity">Telegram</Link>
            </li>
            <li className='pt-2'>
                <Link href="https://www.youtube.com/results?search_query=cryptosmartnow">Youtube</Link>
            </li>
            <li className='pt-2'>
                <Link href="https://www.linkedin.com/company/cryptosmartnow">Medium</Link>
            </li>
        </ul>

         {/* <ul className=' footer-child'>
            <li className='pt-2'>
                <Link href="https://www.instagram.com/cryptosmart">Instagram</Link>
            </li>
            <li className='pt-2'>
                <Link href="https://www.linkedin.com/company/cryptosmartnow">LinkedIn</Link>
            </li>
            <li className='pt-2'>
                <Link href="https://www.reddit.com/r/cryptosmartnow">Reddit</Link>
            </li>
            <li className='pt-2'>
                <Link href="https://discord.com/invite/XkWWY6rBcH">Discord</Link>
            </li>
        </ul> */}
      </div>
    </footer>
  )
}

export default Footer