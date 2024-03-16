
'use client'
import FilterCard from '@/components/FilterCard'
import Card from '@/components/HotelCard'

import SearchContainer from '@/components/SearchBar'

const page = () => {
  return (
      <div>
          <SearchContainer />
          <div>
              <FilterCard />
              <Card/>
              
          </div>
          
    </div>
  )
}

export default page