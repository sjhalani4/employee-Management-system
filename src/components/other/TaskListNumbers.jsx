import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex mt-10  justify-between gap-5'>
        <div className=' w-[45%] bg-red-400 px-9 py-6 rounded-xl'>
            <h2 className='text-3xl font-semibold'>1</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className=' w-[45%] bg-blue-400 px-9 py-6 rounded-xl'>
            <h2 className='text-3xl font-semibold'>3</h2>
            <h3 className='text-xl font-medium'>completed Task</h3>
        </div>
        <div className=' w-[45%] bg-green-400  px-9 py-6 rounded-xl'>
            <h2 className='text-3xl font-semibold text-black'>0</h2>
            <h3 className='text-xl font-medium text-black'>Accepted Task</h3>
        </div>
        <div className=' w-[45%] bg-yellow-400 px-9 py-6 rounded-xl'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers