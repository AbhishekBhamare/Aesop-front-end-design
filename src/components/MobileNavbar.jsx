import React from 'react'
import {BsSearch, BsHeart, BsList } from 'react-icons/bs'
import './MobileNavbar.css';

export default function MobileNavbar() {
  return (
    <div className='mobile-navbar'>
        <div className='mobile-right'>
            <p style={{fontSize:"x-large"}}>Aesop®</p>
        </div>
        <div className='mobile-left'>
            <div className='menu' style={{padding:"1rem"}}><BsSearch/></div>
            <div className='menu' style={{padding:"1rem"}}><BsHeart/></div>
            <div className='menu' style={{padding:"1rem"}}><p>Cart</p></div>
            <div className='menu' style={{padding:"1rem"}}><BsList/></div>
        </div>
    </div>
  )
}
