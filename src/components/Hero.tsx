
function Hero() {
  return (
    <div className='hero lg:h-[100vh] pt-10 px-10 pb-20 text-white'>

      <div className="hidden lg:block float-right w-[341px] text-white border-dashed border-2 border-white p-10 mt-20">
        <div>
          <h2 className="text-[24px] font-bold">
            Ancient Underwater ruin of Oshun
          </h2>
          <p className="text-[12px] text-[#f3f3f3ad]">Oshun is considered one of the most powerful of all orishas, her temple is filled with treasures and water rune magic.</p>
          <p className="text-[14px] font-bold pt-2">20,000 QLIP   1 of 1</p>
        </div>
      </div>

      <div className="mt-16 lg:mt-72">
        <p className="text-[30px] lg:text-[34px] font-bold lg:w-[400px]">NFT Martkeplace for African Creators</p>
        <p className="text-[18px] lg:text-[20px] text-[#F3F3F3AD] lg:w-1/2 font-medium">Create, explore and trade in the first-ever African owned  NFT Markeplace.</p>
        <div className="mt-4">
          <button className="px-8 lg:px-16 py-3 bg-[#5429E1] rounded-full text-[18px] font-bold mr-8">Create</button>
          <button className="px-8 lg:px-16 py-3 bg-white text-black rounded-full text-[18px] font-bold">Explore</button>
        </div>
      </div>

    </div>

    
  )
}

export default Hero