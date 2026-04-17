import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faBars, faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router';
const logoImg = "/images/logo.png";
const statsIcon = "/images/stats.png";

const Navbar = () => {

  const [open, setOpen] = useState(false);
          const handleMenu = () => {
              // console.log('bar clicked')
              setOpen(!open);
  
          }
  const links = <>
      <li>
        <NavLink to={"/"} className={({isActive}) => `mr-3 ${isActive ? "bg-[#244D3F] text-white rounded" : ""}`}><FontAwesomeIcon icon={faHouse} />Home</NavLink>
      </li>
      <li>
        <NavLink to={"/timeline"} className={({isActive}) => `mr-3 ${isActive ? "bg-[#244D3F] text-white rounded" : ""}`}><FontAwesomeIcon icon={faClock} />Timeline</NavLink>
      </li>
      <li>
        <NavLink to={"/stats"} className={({isActive}) => `${isActive ? "bg-[#244D3F] text-white rounded" : ""}`}><img src={statsIcon} alt="" />Stats</NavLink>
      </li>
  </>

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm md:flex px-4 md:px-16">
            <div className="flex-1">
                <img src={logoImg} alt="" />
            </div>

            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 hidden md:flex">
                    {links}
                </ul>
                <button className='cursor-pointer md:hidden' onClick={handleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                
            </div>
        </div>
        <div className='flex justify-end mr-1.5 px-2 md:hidden'>
            {open && (
                  <ul className="menu px-1">
                    {links}
                  </ul>
                )}
        </div>
    </>
  )
}

export default Navbar