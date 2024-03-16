'use client'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Modal, Spin } from 'antd';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Page = () => {
    const [loading, setLoading] = useState(true);
    const [hotel, setHotel] = useState({});
    const params = useParams();
    const [auth, setAuth] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const cookie = Cookies.get("user");
        if (cookie) {
            setAuth(true);
            return;
        }
        setAuth(false);
    }, []);

    const hotelIds = async () => {
        try {
            const { data } = await axios.get(`/api/hotels/${params.id}`);
            if (data.hotel) {
                setHotel(data.hotel);
            } else {
            }
        } catch (error) {

        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const cookie = Cookies.get("user");
        if (cookie) {
            setAuth(true);
        }
    }, [auth]);

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

    useEffect(() => {
        hotelIds();
    }, []);

    return (
        <div className="container mx-auto">
            {loading ? (
                <div className="flex items-center justify-center h-screen">
                    <Spin size="large" />
                </div>
            ) : (
                <>
                    <Navbar/>
                    <div className='px-[20px]'>
                        <div>
                            <h2 className=' text-[52px] my-[53px]  w-full text-center text-[black] font-bold  md:text-[50px]'>
                                {hotel.name}
                            </h2>
                        </div>

                        <Carousel>
                            {hotel.gallery && hotel.gallery.map((image, index) => (
                                <div key={index}>
                                    <img src={image} alt={`Gallery Image ${index + 1}`} />
                                </div>
                            ))}
                        </Carousel>

                        <div className='flex justify-between items-center'>
                            <div className="flex text-[34px] items-center justify-start">
                                <FaLocationDot />{hotel?.location}
                            </div>
                            <div className="text">
                                <span className="line-through  text-[red]">
                                    ₹   {(hotel?.price * 15) / 100 + hotel?.price}
                                </span>
                                <span className="text-[green] ml-2 text-[32px]">
                                    ₹     {hotel?.price}  <span className='text-[10px] text-[gray]'>/per night</span>
                                </span>
                            </div>
                        </div>
                        <button
                            className='w-full  text-white rounded-5px text-20px bg-[blue] p-[20px] mt-[20px]'
                            onClick={handleBookNow}
                        >
                            Book Now
                        </button>
                        <Modal
                            footer={false}
                            title=""
                            visible={isModalVisible}
                            onOk={handleOk}
                            onCancel={handleCancel}
                        >
                            <div className=' text-[23px]   w-full text-center text-[black]  md:text-[30px]'>
                                Hotel Booking Confirmation
                            </div>
                            <p className='text-center'>Your hotel is booked successfully</p>
                        </Modal>
                        <h2 className="text-[32px] font-bold mt-4">Facilities</h2>
                        <ul>
                            {hotel?.facilities?.map((facility) => (
                                <li key={facility._id} className="flex items-center space-x-2 mt-[10px]">
                                    <img src={facility.img} alt={facility?.name} className="h-8 w-8 rounded-full" />
                                    <span className='text-[gray]'>{facility?.name}</span>
                                </li>
                            ))}
                        </ul>
                        <h2 className="text-[32px] font-bold mt-4">About</h2>
                        <div className='mb-[30px]   text-[gray]'>
                            {hotel.description}
                        </div>
                    </div>
                    <Footer />
                </>
            )}
        </div>
    );
};

export default Page;
