'use client'
import Cookies from 'js-cookie'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import logo from '../../public/logo-no-background.png'

const Navbar = () => {
    const router = useRouter();
    const [auth, setAuth] = useState(false);
    useEffect(() => {
        const key = Cookies.get("user");
        if (key) {
            setAuth(true);
        } else {
            setAuth(false); 
        }
    }, [auth])
    const handleLogout = () => {
        Cookies.remove("user");
        setAuth(false);
        window.location.reload(); 
    };

    return (
        <div className='pt-[20px] w-[100%] '>

            <div
                style={{
                    width: "98%",
                    backgroundColor: "#0303039f",
                    borderRadius: "40px",
                    margin: "auto",
                    padding: "12px 20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                
                }}
        //         className='z-323
        // w-[98%]
        //   bg-[#0303039f]
        // rounded-[40px]
        // m-[auto]
        // px-[20px] 
        // shadow-md
        //   py-[12px] flex justify-between items-center '
            >
                <Image
                    src={logo} 
                    style ={{ width : "90px"}}
                //   className='w-[80px]'  
                />
                <div className='flex'>

                    {
                        auth ? <span className=' loginbutton px-2 text-white'
                            onClick={handleLogout}
                        >
                            Log out
                        </span> :
                            <div>
                                <Link
                                    href='/login'
                                    className='
                                    loginbutton
                                    px-2
                                    text-white'
                                >Sign In</Link>
                                <Link

                                    href='/signup'
                                    className='px-2 text-white
                                         border-2
                                    text-[white]
                                    rounded-[40px]
                                    py-[10px]
                                    px-[20px]
                                    mx-[5px]
                                    
                                    '>Register</Link>
                            </div>

                    }

                </div>
            </div>

        </div>

    )
}

export default Navbar;
