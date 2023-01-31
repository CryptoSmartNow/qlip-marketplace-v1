import  nftcard from '../styles/nftcard.module.css'

export default function NFTcard({img,title,description,price}){
   
    return(
        
        <div className={nftcard.cardstyle}>
      {img}
      <h3>{title}</h3><br></br>
      <span>{description}</span>
      <h4>{price}</h4>  
    </div>
     
    )
}