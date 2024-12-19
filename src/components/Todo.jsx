import React from 'react'
import todoIcon from '../assets/todo_icon.png'

const Todo = () => {
    return (
        <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
            {/* Title      */}
            <div className="flex items-center mt-7  gap-2">
                <img className='w-8 cursor-pointer' src={todoIcon} alt="" />
                <h1 className='text-3xl font-semibold'>Todo List</h1>
            </div>
            {/* input box */}
            <div className="flex items-center my-7 bg-gray-200 rounded-full">
                <input className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" name="" placeholder='Enter Your Task' />
                <button className='border-none rounded-full bg-orange-600 w-32 font-medium cursor-pointer h-14 text-lg text-white'>Add +</button>
            </div>
            {/* Task List */}
            
        </div>
    )
}

export default Todo
