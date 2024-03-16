'use client'

import { Button, Image, Modal } from "antd"
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const HotelCard = ({ hotel }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const router = useRouter();
  const handleBookNow = () => {
    const cookie = Cookies.get("user");
    if (cookie) {

      setIsModalVisible(true);
    } else {

      router.push('/login');
    }
  };

  const handleOk = () => {
    setIsModalVisible(false);
    // Perform booking action
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div
      className="
      w-[93vw]
      rounded-[20px]
      m-auto
     bg-white
      py-[12px]
      my-[30px]
      shadow-md
      "

    >
      <div className="flex my-[0px]">


        <div className='flex w-[40%] justify-center item-center  '>
          <div>
            <Image
              className="w-[230px] h-[230x] rounded-md"
              src={hotel?.banner}
              style={{
                width: '95%',
                height: "90%",
                margin: 'auto'

              }}/>
          </div>
          {/* <div>
          {hotel.gallery.map(image => (
            <div key={image}>
              <Image
                style={{
                  width: "50px", height: "50px", objectFit: "cover"       }}
              
                className="w-[20px] h-[20px] " src={image} />
            </div>
          ))}

        </div> */}
        </div>
        <div
          className="w-[60%] "
        >
          <h1 className="text-[25px] md:text-[45px]">{hotel?.name}</h1>
          <div
            className="flex text-[22px] items-center justify-start"
          >
            <FaLocationDot />{hotel?.location}
          </div>
          <h4
            className="text-[gray]"
          >{hotel?.description}</h4>

          <div className="flex gap-2 mt-[20px] ">
            {hotel?.facilities?.map(facility => (
              <div className="flex justify-center items-center flex-col" key={facility._id}>
                <img
                  className="w-[20px] h-[20px] "
                  src={facility.img} alt={facility.name}
                />
                <p>{facility.name}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-end items-center">
            <div  className="mr-[20px]" >
              <div>
                1 night, max 2 adults
              </div>
              <div className="text-right">
                <span className="line-through  text-[red]" >
               ₹   {
                    (hotel?.price*15)/100 + hotel?.price
                  }
                </span>

                <span
                  className="text-[green] ml-2 text-[22px]  "
                
                >
             ₹     {hotel?.price}
                </span> 
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center" >
            <Button
              
              className='
                            
                            rounded-[22px]
                            bg-[white]
                            px-[30px]
                            text-[15px]
                            text-[blue]
                            h-[38px]
                            border-[blue]

                            
                            '
              
            ><Link
                
                     
                href={`/hotels/${hotel?._id}`}
                      >

                      View Details
        </Link></Button>
            <Button
              className='
                            mx-[10px]
                            rounded-[22px]
                            bg-[blue]
                            px-[30px]
                            text-[15px]
                            text-[white]
                            h-[38px]'
              onClick={handleBookNow}
            >Book Now</Button>
            <Modal
              footer={false}
              title=""
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}

            >
              <div className=' text-[23px] mt-[20px]  w-full text-center text-[black]  md:text-[30px]'>
                Hotel Booking Confirmation
              </div>
              <p className='text-center'>Your hotel is booked successfully</p>
            </Modal>
            
          </div>



        </div>
      </div>


    </div>
  )
}

export default HotelCard