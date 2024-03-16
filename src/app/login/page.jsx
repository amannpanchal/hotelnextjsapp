'use client'

import { message } from 'antd';
import axios from 'axios';
import Cookies from "js-cookie";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import BackGround from '../../../public/backgroundImage.jpg';
import Logo from '../../../public/logo-no-background.png';
const Page = () => {
  

  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleSubmit = async(e) => {
    e.preventDefault();
    const { data } = await axios.post(`/api/login`, {
      email,password
      
    })
    if (data.token) {
      Cookies.set("user", data.token, { expires: 7 });


      message.success("Login Successfull")
      router.back();
      
    } else {
      message.error("Invalid credentials")
    }

    
  };

  return (
    <div
      className='flex bg-[black] justify-center items-center h-screen w-screen '
    >
     
      <div className='absolute top-0 w-[100vw]  h-[100vh]'>
        <Image className=' w-[100vw] h-[100vh] opacity-50 ' src={BackGround} />
      </div>



      <div
        className='
        glass
      h-[50vh]
      justify-center
        flex flex-col  items-center'
      >
        
        <Image
          className='w-[90px]'
        src={Logo}
        />
     
        <h1
        className=' text-[30px] my-[10px] text-[white] '
        
        >Login</h1>
        <form
          className='flex flex-col'
          
          onSubmit={handleSubmit}>
          <input
            
            className=' inputField outline-none'
            
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
          <input
            className='inputField'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
            required
            
          />
          <div>
            <span
              className='text-[white]'
            
            >
              Already have account ?</span>
          <Link  className='text-[blue] ' href={'/signup'} >  Sign up</Link >
          </div>
          <button className='py-[9px] bg-[blue]' type="submit">Login</button>
        </form>
      </div>
       
      
    </div>
  );
};

export default Page;
