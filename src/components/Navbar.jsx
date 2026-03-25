import React from 'react'
import logo from "../assets/logo.png"
import useAppContext from '../context/AppContext'
import currency from "../assets/Currency.png"

const Navbar = () => {
    const {coin} = useAppContext()
  return (
    <div>
        <div className='container mx-auto border-b border-gray-300 mb-6'>
            <div className='flex justify-between items-center py-4'>
                <img src={logo} alt="" />
                <div className='flex gap-1 items-center text-2xl font-semibold'>
                    <span>{coin}</span>
                    <span>Coin</span>
                    <div><img src={currency} alt="" /></div>
                                
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
