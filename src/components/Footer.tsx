import Link from 'next/link'
// import Image from 'next/image'

function Footer() {
  return (
    <footer className='flex pt-[20px] h-[40vh] bg-black text-[#fff] font-dm text-[18px] tw-semibold pb-10'>
     
        <ul className='flex flex-row pl[75px] text-xs'>
            <li className='pt-2 pl-[50px] pr-[250px]'>
                <Link href="/"><img src="/img/logo.png" alt="Qlip logo" /></Link>
            </li>
        </ul>
        

        <div className = 'flex flex-row space-x-[30px] pl[75px] font[3rem] text-bolder'>
        <ul className='pl-[35px] pr-[35px] a:font-sans text-[20px] tw-bolder'>
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

        <ul className='pl-[35px] pr-[35px] a:font-sans text-[20px] tw-bolder'> 
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
        </div>
        </footer>

         /* <ul className=' footer-child'>
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
        </ul> */
     
  )
}

export default Footer