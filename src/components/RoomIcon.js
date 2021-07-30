import React from 'react'
import './RoomIcon.css'

function RoomIcon({letter,inSidebar}) {
  return (
    <div className={`room_icon ${ inSidebar? "in_sidebar" : ""}`}>
      {letter}
    </div>
  )
}

export default RoomIcon
