import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex flex-wrap justify-between gap-y-4 gap-x-3 screen mt-10 w-[90%]'> 
      <div className='p-7 w-[45%] bg-blue-400 py-6 px-9 rounded-xl 
                      shadow-xl border border-blue-500 
                      transition-all duration-300 ease-in-out 
                      hover:scale-105 hover:shadow-[0px_0px_15px_5px_rgba(239,68,68,0.7)]'>
        <h2 className='text-2xl font-semibold py-2 px-2'> {data.taskCounts.newTask}</h2>
        <h3 className='text-xl font-medium py-3 px-2'> New Task</h3>
      </div>
      <div className='p-7 w-[45%] bg-yellow-400 py-6 px-9 rounded-xl 
                      shadow-xl border border-yellow-500 
                      transition-all duration-300 ease-in-out 
                      hover:scale-105 hover:shadow-[0px_0px_15px_5px_rgba(59,130,246,0.7)]'>
        <h2 className='text-2xl font-semibold py-2 px-2'>  {data.taskCounts.active}</h2>
        <h3 className='text-xl font-medium py-3 px-2'> Task Accepted</h3>
      </div>
      <div className='p-7 w-[45%] bg-green-400 py-6 px-9 rounded-xl 
                      shadow-xl border border-green-500 
                      transition-all duration-300 ease-in-out 
                      hover:scale-105 hover:shadow-[0px_0px_15px_5px_rgba(34,197,94,0.7)]'>
        <h2 className='text-2xl font-semibold py-2 px-2'>  {data.taskCounts.completed}</h2>
        <h3 className='text-xl font-medium py-3 px-2'>Task Completed</h3>
      </div>
      <div className='p-7 w-[45%] bg-red-400 py-6 px-9 rounded-xl 
                      shadow-xl border border-red-500 
                      transition-all duration-300 ease-in-out 
                      hover:scale-105 hover:shadow-[0px_0px_15px_5px_rgba(234,179,8,0.7)]'>
        <h2 className='text-2xl font-semibold py-2 px-2'>  {data.taskCounts.failed}</h2>
        <h3 className='text-xl font-medium py-3 px-2'> Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
