'use client'
import Image from 'next/image'
import backgroundImage from '../../public/backgroundImage.jpg'
import Footer from './Footer'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
const FrontPage = () => {
  return (
      <div
      className='frontBackground
          w-screen h-[50vh]'
    >
      
      <Navbar />
    
        <Image className = "imagePic" src={ backgroundImage} />
      <div className='backgroundColorSetting'>
        .
  </div>

          <SearchBar/>
          <Footer/>
    </div>
  )
}

export default FrontPage