import React, { useState, useEffect } from 'react';
import './DesktopNavbar.css'; 
import {BsSearch} from 'react-icons/bs';

function DesktopNavbar() {
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // add the scroll event listener
    return () => window.removeEventListener('scroll', handleScroll); // remove the event listener on unmount
  }, [isScrolled]);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 100 && !isScrolled) {
      setIsScrolled(true);
    } else if (scrollTop === 0 && isScrolled) {
      setIsScrolled(false);
    }
  };

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const setWindowDimensions = () => {
        setWindowWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', setWindowDimensions);
        return () => {
            window.removeEventListener('resize', setWindowDimensions)
        }
    }, [])

  return (
    <nav className={`navbar ${isScrolled? 'scrolled' : 'unscrolled'}`}>
      <div className='container1'>
            <a className="MenuItem">Skin Care</a>
            <div style={{
                display: windowWidth<1000? 'none' : 'block'
            }}>
                <a className="MenuItem">Body & Hand</a>
                <a className="MenuItem">Hair</a>
                <a className="MenuItem">Fragrance</a>
                <a className="MenuItem">Home</a>
                <a className="MenuItem">Kits & Travel</a>
                <a className="MenuItem">Gifts</a>
            </div>
            <a className="MenuItem">Read</a>
            <a className="MenuItem">Stores</a>
            <a className="MenuItem"><BsSearch/></a>
        </div>
        <div className='container2'>
            <a className="MenuItem">Log in</a>
            <a className="MenuItem">Cabinet</a>
            <a className="MenuItem">Cart</a>
        </div> 
    </nav>
  );
}

export default DesktopNavbar;
