'use client'

import HotelCard from './HotelCard'
const HotelList = ({hotels}) => {
  return (
      <div>
          {
              hotels?.map((hotel) => {
                  return <>
                      <HotelCard hotel = {hotel} />
                  </>
              })
          }
    </div>
  )
}

export default HotelList