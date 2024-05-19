import React from 'react'
// import Navpic from './images/Navpic.png'

function Navbar() {
    const navbar = [
        {title : 'Home'},
        {title : 'Internship'},
        {title : 'Admin'},
        {title : 'Company'},
        {title : 'Test Bank'},
    ]
  return (
    <nav className='flex justify-between px-32 py-8 '>
      <div className='border-r border-[#1E1E1E99]'>
      {/* <img src={require('./images/Navpic.png')} alt="" /> */}
        <p className='text-[18px] text-[#1E1E1E99] font-poppins font-md mr-4'>Intern Hub</p>
      </div>
      <div className=' pr-40 space-x-[40px]'>
      {
        navbar.map((nav , index) => (
            <a key={index} className='text-[18px] text-black font-poppins font-md' href="">{nav.title}</a>
        ))
      }
      </div>
    </nav>
  )
}

export default Navbar
