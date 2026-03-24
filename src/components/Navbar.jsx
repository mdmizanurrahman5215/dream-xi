import React from 'react'
import coin from "../assets/Currency.png"
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div>
        <div className='container mx-auto'>
            <div className='flex justify-between items-center py-4'>
                <img src={logo} alt="" />
                <div className='flex gap-1 items-center'>
                    <span>60000000</span>
                    <span>Coin</span>
                    <div><img src={coin} alt="" /></div>
                                
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
