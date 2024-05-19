import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Categories from './Components/Categories'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Categories/>
    <Footer/>
    </>
  )
}

export default App
