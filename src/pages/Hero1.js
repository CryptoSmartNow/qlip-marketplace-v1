
import  hero1 from '../styles/hero1.module.css'
import Image from 'next/image'

 export default function Hero1(){
   
    return(
        <div className ={hero1.body}>
            <ul>
        <li> <Image src="/Group 37.png" alt="Qlip logo" width="26" height="36"/>Qlip</li>
        <li> Home</li>
        <li>Games</li>
        <li>Qlip NFTs</li>
        <li>Whitepaper</li>
        <li>Mint Store</li>
        <li><button>Connet wallet</button></li>
        </ul>
            <h2>Qlip Genesis Gaming</h2>
            <p>A Multiverse of Qlip collectibles and Qlip play2Earn games</p>
            <button>Play Game</button>
            <Image src="/Group 37.png" alt="Qlip logo" width="26" height="36"/>
           
        </div>

    )
}
