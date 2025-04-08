import React from 'react'

const AcceptTask = ({data}) => {
  console.log(data)
  return(
    <div className='h-[90%] w-[300px] bg-red-400 rounded-xl p-5 shadow-xl border border-red-500 flex-shrink-0
    transition-all duration-300 ease-in-out 
    hover:scale-103 hover:shadow-[0px_0px_15px_5px_rgba(234,179,8,0.7)]'>
<div className="flex justify-between items-center"> 
<h3 className="bg-red-600 px-3 py-1 rounded text-sm"> {data.category}</h3> 
<h4 className="text-sm"> {data.taskDate}</h4> 
</div>
<h2 className="mt-5 text-xl font-semibold"> {data.taskTitle} </h2>
<p className="text-sm mt-2"> {data.taskDescription}</p>
<div className="flex justify-between mt-3 ">
    <button className="bg-green-500 py-1 px-2 text-sm  rounded-lg"> Mark as Completed</button>
    <button className="bg-red-500 py-1 px-2 text-sm rounded-lg" > Mark as Failed</button>
</div>
</div>
  )
}

export default AcceptTask
