import React from 'react'


const Label = () => {
  
    
  return (
    <div>
       <div className='container mx-auto flex justify-between items-center'>
        <p>Available players</p>
        <div>
            <button className=' border border-r-0 border-gray-400 px-4 py-2 rounded-l-2xl bg-[#E7FE29]'>Available</button>
            <button className='border border-l-0 border-gray-400 px-4 py-2 rounded-r-2xl'>Selected <span>(0)</span></button>
        </div>
       </div>
    </div>
  )
}

export default Label
