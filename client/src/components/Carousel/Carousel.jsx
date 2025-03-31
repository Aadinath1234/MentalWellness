import React from 'react'

function Carousel() {
  return (
    <div className='bg-blue-500 p-20'>
      
      <div className="carousel carousel-center rounded-box h-96  ">
  <div className="carousel-item">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRBTVojjekWR0UyCjU-Q75YaVfmDGHCl0HdQ&s" alt="Pizza" />
  </div>
  <div className="carousel-item">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ut71M7oBKrKEsNLjNwnVm0fbjly_CkvW1g&s"
      alt="Pizza" />
  </div>
  <div className="carousel-item">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWXpCwTVpCnPF5VujtLLWsQy-3Np99PCWEA&s"
      alt="Pizza" />
  </div>
  <div className="carousel-item">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5plqj3oHf8hl0U1CuAxmSjvagC_x6mrR1RA&s"
      alt="Pizza" />
  </div>
  <div className="carousel-item">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6PgAnlnLtKvgHCs-Uo7eYtcS1lSX35zZtfg&s" alt="Pizza" />
  </div>
  <div className="carousel-item">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq_bD4MAwC2r9p9tTk08_dV2ZEqDseECqRfA&s" alt="Pizza" />
  </div>
  <div className="carousel-item">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7kMkeyJ0PUsBBgrv41EkLF322ibcr4zpNgQ&s"
      alt="Pizza" />
  </div>
  
</div>

{/* status  */}
<div className='flex justify-center items-center' >
<span className="loading loading-ring loading-xs"></span>
<span className="loading loading-ring loading-sm"></span>
<span className="loading loading-ring loading-md"></span>
<span className="loading loading-ring loading-lg"></span>
<span className="loading loading-ring loading-xl"></span>

</div>





    </div>
  )
}

export default Carousel
