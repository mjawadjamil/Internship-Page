import React, { useState } from 'react'
import Navpic from '../images/Navpic.png'

function Navbar() {
    const navbar = [
        { title: 'Home' },
        { title: 'Internship' },
        { title: 'Admin' },
        { title: 'Company' },
        { title: 'Test Bank' },
    ]

    const [nav , setnav] = useState(false);

    const handlenav = () => {
        setnav(!nav);
    }

    return (
        <nav className='flex justify-between items-center md:px-32 md:py-8 '>
            <div className='flex items-center border-r border-[#1E1E1E99]'>
                <img src={Navpic} alt="" />
                <p className='text-[18px] text-[#1E1E1E99] font-poppins font-md mr-4'>Intern Hub</p>
            </div>
            <div className=' pr-40 space-x-[40px] sm:flex hidden'>
                {
                    navbar.map((nav, index) => (
                        <a key={index} className='text-[18px] text-black font-poppins font-md' href="">{nav.title}</a>
                    ))
                }
            </div>

            {/* For HamBurger NavBar */}
            {/* For Navbar */}
            <div onClick={handlenav} className='sm:hidden z-10'>
                <p className='mr-4 cursor-pointer'>MENU</p>
            </div>

            <div className={nav ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col' 
                : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'}>
                <ul className='h-full w-full text-center pt-12'>
                    <li className='text-2xl py-8'>
                        <a href="/">Home</a>
                    </li>
                    <li className='text-2xl py-8'>
                        <a href="">Internship</a>
                    </li>
                    <li className='text-2xl py-8'>
                        <a href="">Admin</a>
                    </li>
                    <li className='text-2xl py-8'>
                        <a href="">Company</a>
                    </li>
                    <li className='text-2xl py-8'>
                        <a href="">Test Bank</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
