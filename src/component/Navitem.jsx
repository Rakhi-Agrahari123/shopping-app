import React from 'react'
import { Link } from 'react-router-dom'

function Navitem({to,text}) {
  return (
   
      <li>
        <Link  className =' font-medium transition-all delay=300 ease-in-out' to={to}>{text}</Link>
        </li>  


  )
}

export default Navitem