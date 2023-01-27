
import Image from 'next/image'
import  navbar from '../styles/navbar.module.css'
import Card from './Card'

     export default function Navbar(){
   
    return(
        <div>
          <section className={navbar.backgroundImage}>
        <ul className ={navbar.navbar}>
          <li> <Image src="/images/logo.png" alt="Qlip logo" width="26" height="36"/><span className={navbar.logotext}>Qlip</span></li>
          <li className ={navbar.children}> Explore</li>
          <li className ={navbar.children}>User Auctions</li>
          <li className ={navbar.children}>Qlip NFTs</li>
          <li className ={navbar.children}>Community</li>
          <li className ={navbar.children}>Mint Store</li>
          <li className ={navbar.children}><button>Connet wallet</button></li>
        </ul> 
        <Card
          text1 ={"Ancient underwater ruins of Osun"}
          text2 ={"Osun is considered one of the most powerful of all orishas,her temple is filled with treasures and water ruin magic"}
          text3 = {"20,000 QLIP 1 of 1"} />
        <h2 className ={navbar.nftText}>NFT Marketplace for <br></br>African Creators</h2>
        <h3 className ={navbar.nftText}>create,explore and trade in the first ever African ever owned NFT <br></br>Marketplace</h3>
        <button className={navbar.createButton}>Create</button>
        <button className={navbar.createButton}>Explore</button>
        </section>
        </div>
    )
     }