import React from 'react'
import './Footer.css'
import { BsArrowUpRight } from 'react-icons/bs'

export default function Footer() {
  return (
  <div className='footer'>
    <div className='upper'>
            <div className='left'>
                <div className='s1'>
                    <input className='input' placeholder='Email Address' style={{borderColor:"white", borderStyle:"solid"}}></input>   
                </div>
                <div className='s2'>
                <input className='input' type='checkbox'/>
                <span className='checkmark'></span>
                <p style={{margin:"1rem", color:"white"}}>Subscribe to receive communications from Aesop about our products and<br/> services. By subscribing, you confirm you have read and accept our</p>
                </div>
                <a style={{marginLeft:"2.2rem", color:"white", textDecoration:"underline"}}>Privacy Policy<BsArrowUpRight/></a>
                   
            </div>
            <div className='right'>
                <div className='title'>
                    <p style={{fontWeight:"500", borderBottom: "1px solid white", paddingBottom:"1rem"}}>Orders and Support</p>
                <div className='info'>
                    <p>Contact us</p>
                    <p>FAQs <BsArrowUpRight/></p>
                    <p>Shipping <BsArrowUpRight/></p>
                    <p>Returns <BsArrowUpRight/></p>
                    <p>Contact Us</p>
                </div>
                </div>
                <div className='title'>
                    <p style={{fontWeight:"500", borderBottom: "1px solid white", paddingBottom:"1rem"}}>Services</p>
                <div className='info'>
                    <p>Live assistance</p>
                    <p>Corporate gifts</p>
                    <p>Facial appointments</p>
                    <p>Click and Collect</p>
                    <p>Video consultation</p>
                </div>
                </div>
                <div className='title'>
                    <p style={{fontWeight:"500", borderBottom: "1px solid white", paddingBottom:"1rem"}}>Location preferences</p>
                <div className='info'>
                    <p>Shipping:</p>
                    <p style={{textDecoration:"underline", paddingBottom:"1rem"}}>Hong Kong SAR, China</p>
                    <p style={{fontSize:"medium", fontWeight:"500"}}>Language:</p>
                    <p style={{textDecoration:"underline"}}>English</p>
                    <p>繁體中文</p>
                    <p>简体中文</p>
                </div>
                </div>
            </div>            
    </div>
    <div className='lower'>
        <div className='left'>
                <div className='lower-title'>
                        <p style={{fontWeight:"500", borderBottom: "1px solid white", paddingBottom:"1rem"}}>Sustainability</p>
                    <div className='info'>
                        <p>All Aesop products are vegan, and we do not test our formulations or ingredients on<br/> animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</p>
                    </div>
                </div>
        </div>
        <div className='lower-right'>
                <div className='title'>
                        <p style={{fontWeight:"500", borderBottom: "1px solid white", paddingBottom:"1rem"}}>About</p>
                    <div className='info'>
                    <p>Our story</p>
                    <p>Foundation</p>
                    <p>Careers</p>
                    <p>Privacy policy</p>
                    <p>Accessibility</p>
                    <p>Cookie Policy</p>
                </div>
        </div>
                <div className='title'>
                        <p style={{fontWeight:"500", borderBottom: "1px solid white", paddingBottom:"1rem"}}>Social media</p>
                    <div className='info'>
                    <p>Instagram<BsArrowUpRight/></p>
                    <p>Twitter<BsArrowUpRight/></p>
                    <p>LinkedIn<BsArrowUpRight/></p>
                    <p>WeChat</p>
                    <p>Weibo <BsArrowUpRight/></p>
                </div>
        </div>
        </div>
    </div> 
    <p style={{borderBottom:"3px solid white", padding:"1rem"}}></p>
    <p style={{color:"white", marginLeft:"2rem", fontWeight:"500"}}>© Aesop</p>
  </div>
  )
}
