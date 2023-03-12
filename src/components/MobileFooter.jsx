import React from 'react'
import './MobileFooter.css';
import {BsArrowUpRight, BsInstagram, BsTwitter, BsLinkedin} from "react-icons/bs";

export default function MobileFooter() {
  return (
    <div className='mobile-footer'>
        <div className='footer-info1'>
            <div>
                <input className='input' placeholder='Email Address' style={{borderColor:"white", borderStyle:"solid"}}></input>
            </div>
            <div className='check'>
                <input className='checkbox' type='checkbox'/>
                <p className="" style={{margin:"1rem", color:"white"}}>Subscribe to receive communications from Aesop about our products and<br/> services. By subscribing, you confirm you have read and accept our</p>
            </div>
            <a style={{marginLeft:"2.2rem", color:"white", textDecoration:"underline"}}>Privacy Policy<BsArrowUpRight/></a>
        </div>
        <div className='footer-info2'>
            <div style={{width:"50%", margin:"1rem"}}>
                <p style={{fontWeight:"500", borderBottom: "1px solid white", paddingBottom:"1rem"}}>Orders and Support</p>
                <p>Contact us</p>
                <p>FAQs <BsArrowUpRight/></p>
                <p>Shipping <BsArrowUpRight/></p>
                <p>Returns <BsArrowUpRight/></p>
                <p>Contact Us</p>
            </div>
            <div style={{width:"50%", margin:"1rem"}}>
                <p style={{fontWeight:"500", borderBottom: "1px solid white", paddingBottom:"1rem"}}>Services</p>
                <p>Live assistance</p>
                <p>Corporate gifts</p>
                <p>Facial appointments</p>
                <p>Click and Collect</p>
                <p>Video consultation</p>
            </div>
        </div>
        <div className='footer-info2'>
            <div style={{width:"50%", margin:"1rem"}}>
                <p style={{fontWeight:"500", borderBottom: "1px solid white", paddingBottom:"1rem"}}>Location preferences</p>
                <p>Shipping:</p>
                <p style={{textDecoration:"underline", paddingBottom:"1rem"}}>Hong Kong SAR, China</p>
                <p style={{fontSize:"medium", fontWeight:"500"}}>Language:</p>
                <p style={{textDecoration:"underline"}}>English</p>
                <p>繁體中文</p>
                <p>简体中文</p>
            </div>
            <div style={{width:"50%", margin:"1rem"}}>
                <p style={{fontWeight:"500", borderBottom: "1px solid white", paddingBottom:"1rem"}}>Sustainability</p>
                <p>All Aesop products are vegan, and we do not test our formulations or ingredients on<br/> animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</p>
            </div>
        </div>
        <div className='footer-info2'>
            <div style={{width:"50%", margin:"1rem"}}>
                <p style={{fontWeight:"500", borderBottom: "1px solid white", paddingBottom:"1rem"}}>About</p>
                <p>Our story</p>
                <p>Foundation</p>
                <p>Careers</p>
                <p>Privacy policy</p>
                <p>Accessibility</p>
                <p>Cookie Policy</p>
            </div>
        </div>
        <div className='footer-info3' style={{borderTop: "2px solid white",}}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <div style={{marginTop:"1rem"}}>© Aesop</div>
                <div style={{marginTop:"2rem", fontSize:"x-large",}}>
                    <BsInstagram style={{marginLeft:"3rem"}}/>
                    <BsTwitter style={{marginLeft:"3rem"}}/>
                    <BsLinkedin style={{marginLeft:"3rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}
