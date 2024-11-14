import React from 'react'

const TaskList = () => {
  return (
    <div id='taskList' className='h-[55%]  flex flex-nowrap outline-none overflow-x-auto  items-center justify-start gap-5 w-full  mt-10 py-5'>
       <div className='h-full flex-shrink-0 w-[300px] bg-red-400 rounded-xl p-5 '>
      <div className='flex justify-between items-center '>
        <h3 className='bg-red-600 px-3 py-1 rounded text-sm'> Sahil</h3>
        <h4 className='text-sm'>20 Feb 2024</h4>
      </div>
      <h2 className='mt-5 text-xl font-semibold'>Prepare a resume</h2>
      <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat nesciunt dicta distinctio, rerum sit odit?</p>
      </div> 
      <div className='h-full flex-shrink-0 w-[300px] bg-blue-400 rounded-xl p-5 '>
      <div className='flex justify-between items-center '>
        <h3 className='bg-red-600 px-3 py-1 rounded text-sm'> Sahil</h3>
        <h4 className='text-sm'>20 Feb 2024</h4>
      </div>
      <h2 className='mt-5 text-xl font-semibold'>Prepare a resume</h2>
      <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat nesciunt dicta distinctio, rerum sit odit?</p>
      </div> 
      <div className='h-full flex-shrink-0 w-[300px] bg-green-400 rounded-xl p-5 '>
      <div className='flex justify-between items-center '>
        <h3 className='bg-red-600 px-3 py-1 rounded text-sm'> Sahil</h3>
        <h4 className='text-sm'>20 Feb 2024</h4>
      </div>
      <h2 className='mt-5 text-xl font-semibold'>Prepare a resume</h2>
      <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat nesciunt dicta distinctio, rerum sit odit?</p>
      </div> 
      <div className='h-full flex-shrink-0 w-[300px] bg-yellow-400 rounded-xl p-5 '>
      <div className='flex justify-between items-center '>
        <h3 className='bg-red-600 px-3 py-1 rounded text-sm'> Sahil</h3>
        <h4 className='text-sm'>20 Feb 2024</h4>
      </div>
      <h2 className='mt-5 text-xl font-semibold'>Prepare a resume</h2>
      <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat nesciunt dicta distinctio, rerum sit odit?</p>
      </div> 
    </div>
  )
}

export default TaskList