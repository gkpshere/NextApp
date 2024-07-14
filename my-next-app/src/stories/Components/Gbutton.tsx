import React from 'react'
import './Gbutton.css'

type ButtonProps={
    primary:Boolean,
    label: String
}

function Gbutton({primary, label}:ButtonProps){
    let classNameButton= primary? "nav-connect": "nav-connect-sec"
  return (
    <div className={classNameButton} ><a onClick={() => {
        console.log("test")
      }} href="#">{label}</a></div>
  )
}

export default Gbutton;