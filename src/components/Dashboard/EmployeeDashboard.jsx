import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'

const EmployeeDashboard = () => {
  return (
    <>
    <div className='p-10 bg-[#1c1c1c] h-screen'>
        <Header/>
        <TaskListNumbers/>
    </div>
    </>
  )
}

export default EmployeeDashboard