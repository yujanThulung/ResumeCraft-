import React from 'react'

const Button = (props) => {
  return (
     <button
      className={`
        border-2 ${props.bgColor} border-emerald-400 text-gray-950 font-semibold 
        px-4 py-2 rounded-sm
        transition-all duration-300 ease-in-out
        hover:bg-emerald-400 hover:text-white hover:scale-105
        hover:shadow-md hover:shadow-emerald-300
        focus:outline-none
      `}
    >{props.text}</button>
  )
}

export default Button