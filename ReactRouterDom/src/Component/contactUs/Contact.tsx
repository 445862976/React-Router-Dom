import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Contact() {
  return (
    <>
          <div className='container'>
              <ul>
                  <li><NavLink to={""} end>Contact Us Form</NavLink></li>
                  <li><NavLink to={"email"}>Email</NavLink></li>
                  <li><NavLink to={"location"}>Location</NavLink></li>
                  <li><NavLink to={"phone"}>Phone Number</NavLink></li>
              </ul>
              <Outlet/>
               <section>Wlcome Hello Contact US Form </section>
           </div>

    </>
  )
}
