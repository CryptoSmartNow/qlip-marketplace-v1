import Link from 'next/link'
function NFTCaption() {
  return (
<div className='content-center text-center justify-center  bg-[#000] text-white'>

  <div className="p-6 m-auto w-[70%] ">
      <h1 className="text-[24px] font-bold lg:text-[36px]">
          Exclusive Qlip NFTs
      </h1>
    <p className="text-[12px] text-[#f3f3f3ad] lg:text-[18px]">
      Africa is home to a large variety of races, some native to its lands and some hailing from other realms. 
    </p>
  </div>

   <div className='block space-y-4  lg:flex lg:flex-row lg:ml-5 space-x-10 lg:p-10'>
    <div className ='p-4 ml-9 text-center justify-center lg:mt-4'>
        <div className ='p-6 m-auto w-[70%] max-w-sm max-h-sm-[70vh] bg-black border-8 border-gray-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-h-md-[75vh] lg:p-6 lg:m-auto lg:w-[100%] lg:h-[85vh]'>
            <Link href="/"><img className="rounded-t-lg" src="/img/RUIN_OF_OSHUN.png" alt="Qlip logo"/></Link>
            <div className='max-w-sm text-wrap'>
        <h3  className ='text-5 text-white text-center justify-center mb-2 lg:text-10 lg:mb-3'>RUIN OF OSHUN</h3>
        <p  className ='text-3 text-center justify-center mb-4 lg:text-6 lg:mb-8'>Osun is considered one of the most powerful of all the orishas her temple is filled with treasure and water ruin magic</p>
        <h3 className="text-5 text-center justify-center lg:text-10">10,000 QLIP</h3>
        </div> 
        </div>
        </div>

      <div className ='p-4 text-center justify-center'>
        <div  className =' p-6 m-auto w-[70%] max-w-sm max-h-sm-[70vh] bg-black border-8 border-gray-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-h-md-[75vh] lg:p-6 lg:m-auto lg:w-[100%] lg:h-[85vh]'>
        <Link href="/"><img className="rounded-t-lg" src="/img/BUSHLAND.png" alt="Qlip logo"/></Link> 
        <div className='max-w-sm text-wrap'>
        <h3  className ='txt-5 text-center justify-center mb-2 lg:text-10 lg:mb-3'>BUSHLAND</h3>
        <p  className ='text-3 text-center justify-center mb-4 lg:text-6 lg:mb-4'>Explore Bushland—the shattered remains of the once beautiful african homeworld, San.
        her temple is filled with treasure and water ruin magic</p>
        <h3 className="text-5 text-center justify-center lg:text-10">20,000 QLIP</h3>
        </div>
         </div>
      </div>

      <div className ='p-4 text-center justify-center'>
        <div  className =' p-6 m-auto w-[70%] max-w-sm max-h-sm-[70vh] bg-black border-8 border-gray-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700
        max-h-md-[70vh] lg:p-6 lg:m-auto lg:w-[100%] lg:h-[85vh]'>
        <Link href="/"><img  className="rounded-t-lg" src="/img/OSHUN_NFT.png" alt="Qlip logo"/></Link>
        <div className='max-w-sm text-wrap'>
        <h3  className ='text-5 text-center justify-center mb-2 lg:text-10 lg:mb-3'>OSHUN</h3>
        <p  className ='text-3 text-center justify-center mb-4 lg:text-6 lg:mb-[60px]'>
        The Yoruba river deity who rules  divinity, femininity, fertility, beauty and love.
      </p>
        <h3 className="text-5 text-center justify-center pb-7 lg:text-10">100,000 QLIP</h3>
        </div>
        </div>
      </div>
      </div>

      <div><h2 className ='text-5 lg:text-left lg:text-3xl lg:pl-[8%] lg:text-bolder lg:pb-5'>Top Sellers</h2>
      </div>

     <div className='lg:flex space-x-[70%]'> 

      <div className =' lg:pl-[8%]'>
          <select name="duration" id="duration" className='lg:text-black lg:border-3 lg:border-black-800 lg:rounded-lg '>
            <option value = "Today" selected >Today</option>
            <option value = "Last Week">Last Week</option>
            <option value = "Last Month">Last Month</option>
            <option value = "Last 6 Months">Last 6 Months</option>
             <option value = "Last Year">Last Year</option>
          </select>          
      </div>

      <div>
        <div>
          <Link href="/"><img className="rounded-t-md color-black" src="/img/next.svg" alt="Qlip logo"/></Link>
        </div>

        <div>
        <Link href="/"><img className="rounded-t-md color-black" src="/img/next.svg" alt="Qlip logo"/></Link>
        </div>
        </div>
      </div>
      
      <div className ='block space-y-4 text-center justify-center m-auto w-[50%]
        lg:mt-[120px] lg:flex flex-row  lg:space-x-5'>

      <div className ='p-6 m-aut max-w-sm max-h-sm-[70vh] bg-black border-8 border-gray-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-h-md-[40vh] lg:p-6 lg:m-auto lg:w-[100%] lg:h-[50vh]'>
         <div className="font-bold text-xl mb-2">#1 Ranked Seller</div>
        <Link href="/"><img className='w-full' src="/img/seller.png" alt="seller"/></Link>
        <div className="px-6 py-4">Karla Gyan</div> 
        <p>200 ETH</p>
      </div>

      <div className ='p-6 m-auto max-w-sm max-h-sm-[70vh] bg-black border-8 border-gray-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-h-md-[40vh] lg:p-6 lg:m-auto lg:w-[100%] lg:h-[50vh]'>
        <div className="font-bold text-xl mb-2">#2 Ranked Seller</div>
        <Link href="/"><img className='w-full' src="/img/seller.png" alt="seller"/></Link>
        <div className="px-6 py-4">Karla Gyan</div> 
        <p>200 ETH</p>
      </div>
        
      <div className ='p-6 m-auto max-w-sm max-h-sm-[70vh] bg-black border-8 border-gray-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-h-md-[40vh] lg:p-6 lg:m-auto lg:w-[100%] lg:h-[50vh]'>
        <div className="font-bold text-xl mb-2">#3 Ranked Seller</div>
        <Link href="/"><img className='w-full' src="/img/seller.png" alt="seller"/></Link>
        <div className="px-6 py-4">Karla Gyan</div> 
        <p>200 ETH</p>
      </div>

    <div  className ='p-6 m-auto max-w-sm max-h-sm-[70vh] bg-black border-8 border-gray-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-h-md-[40vh] lg:p-6 lg:m-auto lg:w-[100%] lg:h-[50vh]'>
      <div className="font-bold text-xl mb-2">#4 Ranked Seller</div>
      <Link href="/"><img className='w-full' src="/img/seller.png" alt="seller"/></Link>
        <div className="px-6 py-4">Karla Gyan</div>
        <p>200 ETH</p>
    </div>

    <div className ='p-6 m-auto max-w-sm max-h-sm-[70vh] bg-black border-8 border-gray-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-h-md-[40vh] lg:p-6 lg:m-auto lg:w-[100%] lg:h-[50vh]'>
      <div className="font-bold text-xl mb-2">#5 Ranked Seller</div>
      <Link href="/"><img className='w-full' src="/img/seller.png" alt="seller"/></Link>
        <div className="px-6 py-4">Karla Gyan</div> 
        <p>200 ETH</p>
      </div>
  </div>

      <div className='pt-5 sm:block lg:flex lg:flex-row lg:space-x-5 lg:pt-10'>
      <h2 className ='lg:pl-[8%] text-2xl'>MARKETPLACE</h2>
          <input type="text text-bold text-5" value="Search for items, collections and accounts" className='text-black border-3 border-black-800 rounded-lg text-3 text-center justify-center w-[50%]'/>
          </div>
         
        <div>
          <ul className=" pt-5 sm:block lg:pt-5 lg:flex lg:flex-row lg:space-x-5 lg:pl-[8%]">
            <li className="hover:bg-black tex-white">Art</li>
            <li className="hover:bg-black tex-white">All Items</li>
            <li className='hover:bg-black tex-white'>Photography</li>
            <li  className='hover:bg-black tex-white'>Meme</li>
            <li className='hover:bg-black tex-white'>Music</li>
            <li className='hover:bg-black tex-white'>Video</li>
            <li className='hover:bg-black tex-white'>3D</li>
            <li className='hover:bg-black tex-white'>Virtual Reality</li>
            <li className='hover:bg-black tex-white'>Domain Names</li>
            <li className='hover:bg-black text-white'>Filter by:Most Recent</li>
          </ul>
        </div>

    <div className='block space-y-4 lg:grid  lg:grid-cols-3 lg:ml-5 space-x-10 lg:p-10'>

         <div className ='p-4 ml-9 text-center justify-center lg:mt-4'>
        <div className ='p-6 m-auto w-[90%] max-w-sm max-h-sm-[70vh] bg-black border-8 border-gray-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-h-md-[75vh] lg:p-6 lg:m-auto lg:w-[100%] lg:h-[85vh]'>
            <Link href="/"><img className="rounded-t-lg" src="/img/map.png" alt="Qlip logo"/></Link>
            <div className='max-w-sm text-wrap'>
        <h3  className ='p-5 text-5 text-white text-left justify-center mb-2 lg:text-10 lg:mb-3'>Afican Mask</h3>
         </div>

        <div  className ='text-3 text-center justify-center mb-4 lg:flex space-x-5 lg:text-6 lg:mb-8'>
        <h2 className="text-5 text-center justify-center lg:text-10">10,000 QLIP</h2>
        <h3>1 of 1</h3>
        </div>

        <div  className ='text-3 text-center justify-center mb-4 lg:flex space-x-5 lg:text-6 lg:mb-8'>
        <h2 className="text-5 text-center justify-center lg:text-10">Highest Bid: 0.001 ETH</h2>
        <h3>New Bid</h3>
        </div>

        <button className='bg-blue text-white border-5 rounded-2 border-blue-500'>Buy NFT</button>

        </div>
        </div> 


 
         <div className ='p-4 ml-9 text-center justify-center lg:mt-4'>
        <div className ='p-6 m-auto w-[90%] max-w-sm max-h-sm-[70vh] bg-black border-8 border-gray-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-h-md-[75vh] lg:p-6 lg:m-auto lg:w-[100%] lg:h-[85vh]'>
            <Link href="/"><img className="rounded-t-lg" src="/img/map.png" alt="Qlip logo"/></Link>
            <div className='max-w-sm text-wrap'>
        <h3  className ='p-5 text-5 text-white text-left justify-center mb-2 lg:text-10 lg:mb-3'>Afican Mask</h3>
         </div>

        <div  className ='text-3 text-center justify-center mb-4 lg:flex space-x-5 lg:text-6 lg:mb-8'>
        <h2 className="text-5 text-center justify-center lg:text-10">10,000 QLIP</h2>
        <h3>1 of 1</h3>
        </div>

        <div  className ='text-3 text-center justify-center mb-4 lg:flex space-x-5 lg:text-6 lg:mb-8'>
        <h2 className="text-5 text-center justify-center lg:text-10">Highest Bid: 0.001 ETH</h2>
        <h3>New Bid</h3>
        </div>

        <button className='bg-blue text-white border-5 rounded-2 border-blue-500'>Buy NFT</button>

        </div>
        </div> 

         
         <div className ='p-4 ml-9 text-center justify-center lg:mt-4'>
        <div className ='p-6 m-auto w-[90%] max-w-sm max-h-sm-[70vh] bg-black border-8 border-gray-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-h-md-[75vh] lg:p-6 lg:m-auto lg:w-[100%] lg:h-[85vh]'>
            <Link href="/"><img className="rounded-t-lg" src="/img/map.png" alt="Qlip logo"/></Link>
            <div className='max-w-sm text-wrap'>
        <h3  className ='p-5 text-5 text-white text-left justify-center mb-2 lg:text-10 lg:mb-3'>Afican Mask</h3>
         </div>

        <div  className ='text-3 text-center justify-center mb-4 lg:flex space-x-5 lg:text-6 lg:mb-8'>
        <h2 className="text-5 text-center justify-center lg:text-10">10,000 QLIP</h2>
        <h3>1 of 1</h3>
        </div>

        <div  className ='text-3 text-center justify-center mb-4 lg:flex space-x-5 lg:text-6 lg:mb-8'>
        <h2 className="text-5 text-center justify-center lg:text-10">Highest Bid: 0.001 ETH</h2>
        <h3>New Bid</h3>
        </div>

        <button className='bg-blue text-white border-5 rounded-2 border-blue-500'>Buy NFT</button>

        </div>
        </div> 

        
         <div className ='p-4 ml-9 text-center justify-center lg:mt-4'>
        <div className ='p-6 m-auto w-[90%] max-w-sm max-h-sm-[70vh] bg-black border-8 border-gray-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-h-md-[75vh] lg:p-6 lg:m-auto lg:w-[100%] lg:h-[85vh]'>
            <Link href="/"><img className="rounded-t-lg" src="/img/map.png" alt="Qlip logo"/></Link>
            <div className='max-w-sm text-wrap'>
        <h3  className ='p-5 text-5 text-white text-left justify-center mb-2 lg:text-10 lg:mb-3'>Afican Mask</h3>
         </div>

        <div  className ='text-3 text-center justify-center mb-4 lg:flex space-x-5 lg:text-6 lg:mb-8'>
        <h2 className="text-5 text-center justify-center lg:text-10">10,000 QLIP</h2>
        <h3>1 of 1</h3>
        </div>

        <div  className ='text-3 text-center justify-center mb-4 lg:flex space-x-5 lg:text-6 lg:mb-8'>
        <h2 className="text-5 text-center justify-center lg:text-10">Highest Bid: 0.001 ETH</h2>
        <h3>New Bid</h3>
        </div>

        <button className='bg-blue text-white border-5 rounded-2 border-blue-500'>Buy NFT</button>

        </div>
        </div> 

         
         <div className ='p-4 ml-9 text-center justify-center lg:mt-4'>
        <div className ='p-6 m-auto w-[90%] max-w-sm max-h-sm-[70vh] bg-black border-8 border-gray-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-h-md-[75vh] lg:p-6 lg:m-auto lg:w-[100%] lg:h-[85vh]'>
            <Link href="/"><img className="rounded-t-lg" src="/img/map.png" alt="Qlip logo"/></Link>
            <div className='max-w-sm text-wrap'>
        <h3  className ='p-5 text-5 text-white text-left justify-center mb-2 lg:text-10 lg:mb-3'>Afican Mask</h3>
         </div>

        <div  className ='text-3 text-center justify-center mb-4 lg:flex space-x-5 lg:text-6 lg:mb-8'>
        <h2 className="text-5 text-center justify-center lg:text-10">10,000 QLIP</h2>
        <h3>1 of 1</h3>
        </div>

        <div  className ='text-3 text-center justify-center mb-4 lg:flex space-x-5 lg:text-6 lg:mb-8'>
        <h2 className="text-5 text-center justify-center lg:text-10">Highest Bid: 0.001 ETH</h2>
        <h3>New Bid</h3>
        </div>

        <button className='bg-blue text-white border-5 rounded-2 border-blue-500'>Buy NFT</button>

        </div>
        </div> 

         
         <div className ='p-4 ml-9 text-center justify-center lg:mt-4'>
        <div className ='p-6 m-auto w-[90%] max-w-sm max-h-sm-[70vh] bg-black border-8 border-gray-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-h-md-[75vh] lg:p-6 lg:m-auto lg:w-[100%] lg:h-[85vh]'>
            <Link href="/"><img className="rounded-t-lg" src="/img/map.png" alt="Qlip logo"/></Link>
            <div className='max-w-sm text-wrap'>
        <h3  className ='p-5 text-5 text-white text-left justify-center mb-2 lg:text-10 lg:mb-3'>Afican Mask</h3>
         </div>

        <div  className ='text-3 text-center justify-center mb-4 lg:flex space-x-5 lg:text-6 lg:mb-8'>
        <h2 className="text-5 text-center justify-center lg:text-10">10,000 QLIP</h2>
        <h3>1 of 1</h3>
        </div>

        <div  className ='text-3 text-center justify-center mb-4 lg:flex space-x-5 lg:text-6 lg:mb-8'>
        <h2 className="text-5 text-center justify-center lg:text-10">Highest Bid: 0.001 ETH</h2>
        <h3>New Bid</h3>
        </div>

        <button className='bg-blue text-white border-5 rounded-2 border-blue-500'>Buy NFT</button>

        </div>
        </div> 

        
         <div className ='p-4 ml-9 text-center justify-center lg:mt-4'>
        <div className ='p-6 m-auto w-[90%] max-w-sm max-h-sm-[70vh] bg-black border-8 border-gray-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-h-md-[75vh] lg:p-6 lg:m-auto lg:w-[100%] lg:h-[85vh]'>
            <Link href="/"><img className="rounded-t-lg" src="/img/map.png" alt="Qlip logo"/></Link>
            <div className='max-w-sm text-wrap'>
        <h3  className ='p-5 text-5 text-white text-left justify-center mb-2 lg:text-10 lg:mb-3'>Afican Mask</h3>
         </div>

        <div  className ='text-3 text-center justify-center mb-4 lg:flex space-x-5 lg:text-6 lg:mb-8'>
        <h2 className="text-5 text-center justify-center lg:text-10">10,000 QLIP</h2>
        <h3>1 of 1</h3>
        </div>

        <div  className ='text-3 text-center justify-center mb-4 lg:flex space-x-5 lg:text-6 lg:mb-8'>
        <h2 className="text-5 text-center justify-center lg:text-10">Highest Bid: 0.001 ETH</h2>
        <h3>New Bid</h3>
        </div>

        <button className='bg-blue text-white border-5 rounded-2 border-blue-500'>Buy NFT</button>

        </div>
        </div> 

         
         <div className ='p-4 ml-9 text-center justify-center lg:mt-4'>
        <div className ='p-6 m-auto w-[90%] max-w-sm max-h-sm-[70vh] bg-black border-8 border-gray-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-h-md-[75vh] lg:p-6 lg:m-auto lg:w-[100%] lg:h-[85vh]'>
            <Link href="/"><img className="rounded-t-lg" src="/img/map.png" alt="Qlip logo"/></Link>
            <div className='max-w-sm text-wrap'>
        <h3  className ='p-5 text-5 text-white text-left justify-center mb-2 lg:text-10 lg:mb-3'>Afican Mask</h3>
         </div>

        <div  className ='text-3 text-center justify-center mb-4 lg:flex space-x-5 lg:text-6 lg:mb-8'>
        <h2 className="text-5 text-center justify-center lg:text-10">10,000 QLIP</h2>
        <h3>1 of 1</h3>
        </div>

        <div  className ='text-3 text-center justify-center mb-4 lg:flex space-x-5 lg:text-6 lg:mb-8'>
        <h2 className="text-5 text-center justify-center lg:text-10">Highest Bid: 0.001 ETH</h2>
        <h3>New Bid</h3>
        </div>

        <button className='bg-blue text-white border-5 rounded-2 border-blue-500'>Buy NFT</button>

        </div>
        </div> 

         
         <div className ='p-4 ml-9 text-center justify-center lg:mt-4'>
        <div className ='p-6 m-auto w-[90%] max-w-sm max-h-sm-[70vh] bg-black border-8 border-gray-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-h-md-[75vh] lg:p-6 lg:m-auto lg:w-[100%] lg:h-[85vh]'>
            <Link href="/"><img className="rounded-t-lg" src="/img/map.png" alt="Qlip logo"/></Link>
            <div className='max-w-sm text-wrap'>
        <h3  className ='p-5 text-5 text-white text-left justify-center mb-2 lg:text-10 lg:mb-3'>Afican Mask</h3>
         </div>

        <div  className ='text-3 text-center justify-center mb-4 lg:flex space-x-5 lg:text-6 lg:mb-8'>
        <h2 className="text-5 text-center justify-center lg:text-10">10,000 QLIP</h2>
        <h3>1 of 1</h3>
        </div>

        <div  className ='text-3 text-center justify-center mb-4 lg:flex space-x-5 lg:text-6 lg:mb-8'>
        <h2 className="text-5 text-center justify-center lg:text-10">Highest Bid: 0.001 ETH</h2>
        <h3>New Bid</h3>
        </div>

        <button className='bg-blue text-white border-5 rounded-2 border-blue-500'>Buy NFT</button>

        </div>
        </div> 
        
        </div> 
        
        <button className ='text-xl border-8 border-blue-800 rounded-2xl w-[150px]'>Load More</button>
        </div> 
       
    )
}
export default NFTCaption