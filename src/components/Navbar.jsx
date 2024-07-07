import React from 'react';
import logo from '../assets/ankit-logo.png';
import { SocialmediaLink } from '../constants';


const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-3 p-2' > 
     <div className='flex flex-shrink-0 items-center'>
      <img src={logo} alt="logo" className='mx-5 w-12'/>
     </div>
     
     <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        {SocialmediaLink.map((link) => {
          const IconComponent = link.icon;
          return (
            <a href={link.url} target="_blank" rel="noopener noreferrer" key={link.name}>
              <IconComponent />
            </a>
          );
        })}
      </div>
     </nav>)
}

export default Navbar