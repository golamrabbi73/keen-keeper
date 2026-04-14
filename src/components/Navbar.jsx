import logoImg from "../../public/images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faClock } from '@fortawesome/free-regular-svg-icons';
import { faBars, faXmark} from '@fortawesome/free-solid-svg-icons';
import statsIcon from "../../public/images/Vector.png";
import { useState } from "react";

export default function Navbar(){
    const [open, setOpen] = useState(false);
        const handleMenu = () => {
            console.log('bar clicked')
            setOpen(!open);

        }
    return (
        <>
        <div className="navbar bg-base-100 shadow-sm md:flex px-4 md:px-16">
            <div className="flex-1">
                <img src={logoImg} alt="" />
            </div>

            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 hidden md:flex">
                    <li className='bg-[#244D3F] text-white rounded'><a><FontAwesomeIcon icon={faHouse} />Home</a></li>
                    <li><a><FontAwesomeIcon icon={faClock} />Timeline</a></li>
                    <li><a><img src={statsIcon} alt="" />Stats</a></li>
                </ul>
                <button className='cursor-pointer md:hidden' onClick={handleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                
            </div>
        </div>
        <div className='flex justify-end mr-1.5 px-2 md:hidden'>
            {open && (
                    <ul className="menu px-1">
                    <li className='bg-[#244D3F] text-white rounded'><a><FontAwesomeIcon icon={faHouse} />Home</a></li>
                    <li><a><FontAwesomeIcon icon={faClock} />Timeline</a></li>
                    <li><a><img src={statsIcon} alt="" />Stats</a></li>
                </ul>
                )}
        </div>
        </>
    )
  }