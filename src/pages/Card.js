
import React from 'react' ;
import  card from '../styles/card.module.css'

 export default function Card({text1,text2,text3}) {

    return (
     <div className={card.cardstyle}>
      <h3>{text1}</h3>
      <p>{text2}</p>
      <h5>{text3}</h5>  
     </div>
     );
  }
   
   