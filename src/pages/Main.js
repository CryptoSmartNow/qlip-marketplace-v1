
import  main from '../styles/main.module.css'
import Image from 'next/image'

export default function Main(){
    return(
        <div>
        <section className ={main.hero} >
            
            <aside className ={main.child}>
                <h3>Ancient under water ruins of Osun</h3>
                <p>osun is considered one of the most powerful of all orishas,her temple is filled with treasures and water ruin magic</p>
            </aside>
            </section>
            <section>
            <h2>Exclusive QLIP NFTs</h2>
            <p>Africa is home to a large variety of races and ethnic groups,some native to the land some immigrating from other realms</p>
            <ul className ={main.parent}>
             <li  className ={main.children}><Image src="/images/logo.png" alt="Qlip logo" width="36" height="36"/></li>
             <li  className ={main.children}><Image src="/images/logo.png" alt="Qlip logo" width="36" height="36"/></li>
             <li  className ={main.children}><Image src="/images/logo.png" alt="Qlip logo" width="36" height="36"/></li>
            </ul>
            <h1>Top Sellers</h1>
            <button>Today</button>
            <ul className ={main.parent}>
             <li  className ={main.children}><Image src="/images/logo.png" alt="Qlip logo" width="36" height="36"/></li>
             <li  className ={main.children}><Image src="/images/logo.png" alt="Qlip logo" width="36" height="36"/></li>
             <li  className ={main.children}><Image src="/images/logo.png" alt="Qlip logo" width="36" height="36"/></li>
             <li  className ={main.children}><Image src="/images/logo.png" alt="Qlip logo" width="36" height="36"/></li>
            </ul>
            </section>
            <section>
            <h2>Market Place</h2> 
            <form>

            </form>
           <label>
                Search Icon:
                <input type="text" name="name" />
            </label>
  
            <ul className ={main.parent}>
             <li  className ={main.children}><Image src="/images/logo.png" alt="Qlip logo" width="26" height="36"/></li>
             <li  className ={main.children}><Image src="/images/logo.png" alt="Qlip logo" width="26" height="36"/></li>
             <li  className ={main.children}><Image src="/images/logo.png" alt="Qlip logo" width="26" height="36"/></li>
             <li  className ={main.children}><Image src="/images/logo.png" alt="Qlip logo" width="26" height="36"/></li>
             <li  className ={main.children}><Image src="/images/logo.png" alt="Qlip logo" width="26" height="36"/></li>
             <li  className ={main.children}><Image src="/images/logo.png" alt="Qlip logo" width="26" height="36"/></li>
             <li  className ={main.children}><Image src="/images/logo.png" alt="Qlip logo" width="26" height="36"/></li>
             <li  className ={main.children}><Image src="/images/logo.png" alt="Qlip logo" width="26" height="36"/></li>
             <li  className ={main.children}><Image src="/images/logo.png" alt="Qlip logo" width="26" height="36"/></li>
            </ul>
            <button>Load More</button>
            </section>
            </div>
    )
}