
function Hero() {
  return (
    <div className='container flex space-x-8 mt-10'>

          <div className ='child flex-start text-white nftText'>
            <h1 className='p-5 text-5xl tw-bold' >NFT Marketplace for African Creators</h1>
            <p className='p-5'>create,explore and trade in the first ever African ever owned NFT Marketplace</p>
            
          </div>

          <div className ='child card absolute top-30 right-6 width-60 height-40
            mt-18 mr-25 border-dashed p-5 #fff flex-end text-white'>
            <h2 className ='text-xl p-1'>Ancient Underwater ruin of Oshun</h2>
            <p className ='text-sm p-1'>oshun is considered one of the most powerful of all orishas,her temple is filled with treasures and water ruin magic</p>
            <h4 className ='text-xl pd-1'>20,000 QLIP 1 of 1</h4>
            <button className='child create'>Create</button>
            <button className='child explore font-font-dm'>Explore</button>
          </div>
            
    </div>

   
  )
}

export default Hero