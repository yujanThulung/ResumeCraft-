import React from 'react'

const Button = (props) => {
  return (
    <button className={`border-2 ${props.bgColor} border-emerald-400  text-zinc-900 px-2 py-2 rounded-sm hover:bg-emerald-500 hover:text-white`}>{props.text}</button>
  )
}

export default Button