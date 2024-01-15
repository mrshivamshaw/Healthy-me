import React from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calender.css'
function Calander() {
  return (
    <div>
        <div>
            <Calendar className="rounded-3xl bg-white bg-opacity-75 drop-shadow-sm shadow-lg border-none p-5 " />
        </div>
    </div>
  )
}

export default Calander