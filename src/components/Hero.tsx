
function Hero() {
  return (
    <div className='block lg:flex lg:space-x-8 md:mt-10 text-xl '>

         <div className ='hidden lg:block p-6 absolute top-[90px] right-[2px] mt-[70px] mr-[60px] border-4 border-dashed text-white
         h-[300px] w-[320px] pr-[20px]'>
            <h2 className ='text-[30px] p-1'>Ancient Underwater ruin of Oshun</h2>
            <p className ='text-[15px] p-1'>oshun is considered one of the most powerful of all orishas,her temple is filled with treasures and water ruin magic</p>
            <h4 className ='text-[30px] pb-1'>20,000 QLIP 1 of 1</h4>
          </div>      

          <div>
            <div>
            <h1 className='p-2 text-3xl tw-bold lg:text-5xl tw-bold lg:absolute top-[290px] left-[25px] w-[550px] h-[160px] mt-[50px] mr-[100px] text-white'>
              NFT Marketplace for African Creators</h1>
            <p className='p-2 tw-bold text-xl text-center align-center lg:text-2xl tw-bold lg:absolute top-[400px] left-[25px] w-[550px] h-[160px] mt-[50px] mr-[100px] text-white'>create,explore and trade in the first ever African ever owned NFT Marketplace</p>
            </div>
            <button className='mt-[150px] h-[80px] w-[280px]  lg:block absolute top-[410px] left-[-450px] bg-black font-font-dm  h-[65px] w-[270px] 
             rounded-[71px] fill-blue font-sans text-bolder font-[35px] text-center align-top m-auto ml-[40%] leading-8 text-white  cursor-pointer'>Create</button>
            <button className='mt-[150px] h-[80px] w-[280px] lg:block absolute top-[410px] left-[-168px] bg-white h-[65px] w-[270px] 
             rounded-[71px] fill-white font-sans text-bolder font-[35px] text-center align-top m-auto ml-[40%] leading-8 font-font-dm text-black  cursor-pointer'>Explore</button>
          </div>
    </div>

    
  )
}

export default Hero