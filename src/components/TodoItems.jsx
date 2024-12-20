import React from 'react'
import tick from "../assets/tick.png"
import not_tick from "../assets/not_tick.png"
import delete_icon from "../assets/delete.png"

const TodoItems = ({ task, id, isCompleted, onDelete, toggle }) => {
  
  return (
    <div className='flex items-center my-3 gap-2'>
      <div onClick={() => {toggle(id)}} id={id} className="flex flex-1 gap-4 items-center cursor-pointer">
        <img src={isCompleted ? tick : not_tick } alt="" className="w-7" />
        <p className={`text-slate-700 text-lg ${isCompleted ? "line-through":""}`}>{task}</p>
      </div>
      <img src={delete_icon} onClick={() => { onDelete(id) }} alt="" className='w-5 cursor-pointer' />
    </div>
  )
}

export default TodoItems
