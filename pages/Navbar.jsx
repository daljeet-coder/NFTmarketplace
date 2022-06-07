import React from 'react'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar_logo">
        <Image style={{'cursor':'pointer'}} src='/Logo.png' layout='fill' />
        </div>
            <ul className='navbar_navlist'>
                <li className='navbar_navlist_list'>Collection</li>
                <li className='navbar_navlist_list'>Market Place</li>
                <li className='navbar_navlist_list'>Community</li>
                <li className='navbar_navlist_list connect_walet'><div className='walet'>Connect Walet</div></li>
            </ul>
    </div>
  )
}
export default Navbar