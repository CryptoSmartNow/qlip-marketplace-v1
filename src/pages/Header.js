
import Card from './Card'
import  header from '../styles/header.module.css'


export default function Header({}){
   
    return(
        <>
        <div className = {header.backgroundImage}>
       <Card
          text1 ={"Ancient underwater ruins of Osun"}
          text2 ={"Osun is considered one of the most powerful of all orishas,her temple is filled with treasures and water ruin magic"}
          text3 = {"20,000 QLIP 1 of 1"} />
          <div className ={header.nftText}>
        <h2 >NFT Marketplace for <br></br>African Creators</h2>
        <span>create,explore and trade in the first ever African ever owned NFT <br></br>Marketplace</span>
       
        <div >
        <ul className={header.buttonparent}>
            <li className={header.buttonchildren}><button className={header.createButton} id={header.childbutton}>Create</button></li>
            <li className={header.buttonchildren}><button className={header.exploreButton} id={header.childbutton}>Explore</button></li>
        </ul>
     
         </div>
        </div>
        </div>
        </>
    )
}