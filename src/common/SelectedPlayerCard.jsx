import React from 'react'
import { MdDelete } from 'react-icons/md'


const SelectedPlayerCard = ({player}) => {
    const {image, name, playingStyle }=player
  return (
    <div className='border p-4 mb-4 rounded-md '>
        <div className='flex justify-between items-center '>
            <div className='flex items-center gap-2'>
                <div className='h-20 w-20 border overflow-hidden rounded-full'>
                    <img src={image} alt={name} className='h-full w-full object-cover' />
                </div>
                <div>
                    <h1>{name}</h1>
                    <p>{playingStyle}</p>
                </div>
            </div>
            <div>
                {/* delete icon  */}
                <span><MdDelete /></span>
            </div>
        </div>
      
    </div>
  )
}

export default SelectedPlayerCard
