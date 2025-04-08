import React from 'react'

const FailedTask = ({data}) => {
    return (
        <div className='h-[90%] w-[300px] bg-yellow-400 rounded-xl p-5 shadow-xl border border-yellow-500 flex-shrink-0
    transition-all duration-300 ease-in-out 
    hover:scale-103 hover:shadow-[0px_0px_15px_5px_rgba(234,179,8,0.7)]'>
            <div className="flex justify-between items-center">
                <h3 className="bg-red-600 px-3 py-1 rounded text-sm"> {data.category}</h3>
                <h4 className="text-sm"> {data.taskDate}</h4>
            </div>
            <h2 className="mt-5 text-xl font-semibold"> {data.taskTitle} </h2>
            <p className="text-sm mt-2"> {data.taskDescription}</p>
            <div className="mt-2">
    <button className="w-full bg-red-500 py-1 px-2 text-sm rounded-lg" > Failed</button>
</div>
        </div>

    )
}

export default FailedTask
