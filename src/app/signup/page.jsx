'use client'
import { useState } from 'react';
import axios from 'axios';
import Cookies from "js-cookie";

import { message } from 'antd'; 
import Logo from '../../../public/logo-no-background.png';
import BackGround from '../../../public/backgroundImage.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/api/signup`, { name, email, password });
      if (data.token) {
        router.push("/");
        Cookies.set("user", data.token, { expires: 7 });
        message.success("Signup Successful"); 
      } else {
        message.error("Something went wrong"); 
      }
    } catch (error) {
      console.error("Error:", error);
      message.error("Something went wrong");
    }
  };

  return (
    <div className='flex justify-center bg-[black] items-center h-screen w-screen'>
      <div className='absolute top-0 w-[100vw]  h-[100vh]'>
        <Image className=' w-[100vw] h-[100vh] opacity-50 ' src={BackGround} />
        </div>
      <div className='glass h-[50vh] justify-center flex flex-col items-center'>
        <Image className='w-[90px]' src={Logo} />
        <h1 className='text-[30px] my-[10px] text-[white]'>Sign Up</h1>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <input
            className='inputField outline-none'
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className='inputField outline-none'
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className='inputField outline-none'
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div>
            <span className='text-[white]'>Already have an account?</span>
            <Link href='/login' className='text-[blue]'>Login</Link>
          </div>
          <button className=' py-[9px] bg-[blue]' type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
