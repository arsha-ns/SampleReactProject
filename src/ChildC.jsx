import React, { useContext } from 'react'
import MessageContext from './MyContext'


function ChildC() {
    const message=useContext(MessageContext)
  return (
    <div>
        <h1>childc component {message}</h1>
    </div>
  )
}

export default ChildC