'use client'

import React from 'react'

const HotelData = () => {
  return (
      <div>
          <div className='w-[93%] bg-[white] dataCard rounded-[20px] py-[30px]  m-auto mt-[70px] flex  items-center justify-around ' >
              <div  >
                  <span className=' text-[40px]  flex justify-center align-center  text-center weight-bold text-[black]  md:text-[60px]'>
                      12k+
                  </span>
                  <div
                      className='text-[15px] text-center  text-[black] md:text-[20px]'

                  >
                      Satisfied Visitors
                  </div>

              </div>
              <div >
                  <span className=' text-[40px] flex justify-center align-center text-center  weight-bold text-[black]  md:text-[60px]  '>
                      4.5k+
                  </span>
                  <div
                      className='text-[15px] text-center  text-[black]  md:text-[20px]'

                  >
                      Amazing Hotels
                  </div>

              </div> <div >
                  <span className=' flex justify-center align-center  text-[40px] text-center  weight-bold text-[black] md:text-[60px]'>
                      2k+
                  </span>
                  <div
                      className='text-[15px] text-center  text-[black] md:text-[20px]'

                  >
                      Special Trips
                  </div>

              </div>



          </div>
    </div>
  )
}

export default HotelData