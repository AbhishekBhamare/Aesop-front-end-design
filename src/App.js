import './App.css';
import React, { useState, useEffect } from 'react';
import DesktopNavbar from './components/DesktopNavbar';
import { BsArrowRight } from "react-icons/bs";
import HorizontalScroll from 'react-horizontal-scrolling';
import ImageMap  from './components/ImageMap';
import { Images, Images2, Images3 } from './components/ImageMap';
import Footer from './components/Footer';
import Mobile from './components/Mobile';

function App() {
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
        <div className="App"><><div className="ShippingBanner">Click and Collect is now available at select stores. Enjoy complimentary carbon neutral shipping on orders over HK$400 &nbsp; &nbsp; &nbsp; +</div></>
          {
          windowWidth > 400 ? <>
          <DesktopNavbar/>
          <div className='body'>
              <div className='aesop'></div>
              <div className='content1'>
                <h5 className='d1'>Home fragrance</h5>
                <h1 className='d2'>Introducing Aromatique Incense</h1>
                <h5 className='d3'>Discover a trio of transportive aromas for wandering <br/>minds—Murasaki, Kagerou and Sarashina<br/>Aromatique Incense—and the Bronze Incense<br/>Holder that elevates their unassuming form.</h5>
                <button className='btn'>Explore the collection &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BsArrowRight/></button>
              </div>
        </div>
        <div className='images'>
          <HorizontalScroll></HorizontalScroll>
            <HorizontalScroll>
                {  
                  ImageMap.map((e, i) => (
                    e.head1? <div className='content2'>
                    <h5 className='d4'>{e.head1}</h5>
                    <h1 className='d5'>{e.head2}</h1>
                    <h5 className='d6'>{e.head3}</h5>
                    <h5 className='d6'>{e.head4}</h5>
                    <a className='btn'>{e.button}&nbsp;<BsArrowRight/></a>
                    </div> : <div key={i} className="map-images">
                    <figure>
                       <img src={e.photo} className="photo" />
                       <figcaption className='label'>{e.title}</figcaption>
                     <figcaption className=''>{e.desc}</figcaption> 
                   </figure>
                   </div>
                  ))
                }
            </HorizontalScroll>
            </div>
        <div className='mid1-body'>
          <img src='https://www.aesop.com/u1nb1km7t5q7/1u7OAHmmIDIpcjd5esJKf3/5a109e362f04f0860eb7660912c3e00d/Aesop_Home_2023_Scented_Home_Web_Homepage_Secondary_Mid_Desktop_2560x1440px.jpg'/>
           <div className='content3'>
              <h1 className="c1">Interior fragrances to lift the<br/> mood</h1>
              <h5 className="c2">Ideal for home or office spaces in need of<br/>refreshment, our Home range comprises a number<br/> of fragrant preparations, from incense to room <br/>sprays.</h5>
              <button className='btn'>Browse Scented Home &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BsArrowRight/></button>
           </div>
        </div>
        <h1 className='temp'>A superlative selection</h1>
        <div>
        <HorizontalScroll>
                  {
                    Images.map((e, i) => {
                      return <div key={i} className="map-images">
                      <figure>
                         <img src={e.photo} className="photo" />
                         <figcaption className='label'>{e.title}</figcaption>
                       <figcaption className=''>{e.desc}</figcaption> 
                     </figure>
                     </div> 
                    })
                  }
        </HorizontalScroll>
        <div className='mid2-body'>
            <div className='content3'>
                <h6 className='c2'>The Athenaeum</h6>
                <h1 className="c1">Aesop on Vitamins</h1>
                <h5 className="c2">Among those we often return to in our formulations<br/>are a range of ingredients known to benefit the skin—<br/>vitamins C, B3, E and Provitamin B5.</h5>
                <button className='btn'>Discover Vitamins &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BsArrowRight/></button>
            </div>
          <img src='https://www.aesop.com/u1nb1km7t5q7/1I7rCDhJnjtMrbKiJkE6vb/15b009704972d22ff37b5720ebda0401/Aesop_Skincare_Plus_Landing_Page_Secondary_Desktop_1690x1080px.jpg'/>
        </div>
        <div className='images'>
          {/* <div className='div-btn'><button className="btn3"><BsChevronLeft /></button></div> */}
          <HorizontalScroll></HorizontalScroll>
            <HorizontalScroll>
                {  
                  Images2.map((e, i) => (
                    e.head1? <div className='content2'>
                    <h5 className='d4'>{e.head1}</h5>
                    <h1 className='d5'>{e.head2}</h1>
                    <h1 className='d5'>{e.head3}</h1>
                    <h5 className='d6'>{e.head4}</h5>
                    <h5 className='d6'>{e.head5}</h5>
                    <h5 className='d6'>{e.head6}</h5>
                    <a className='btn'>{e.button}&nbsp;<BsArrowRight/></a>
                    </div> : <div key={i} className="map-images">
                    <figure>
                       <img src={e.photo} className="photo" />
                       <figcaption className='label'>{e.title}</figcaption>
                     <figcaption className=''>{e.desc}</figcaption> 
                   </figure>
                   </div>
                  ))
                }
            </HorizontalScroll>
            {/* <button className="btn4"><BsChevronRight /></button>         */}
            </div>
            <div className='mid1-body'>
          <img src='https://www.aesop.com/u1nb1km7t5q7/6FbqraGc96gts4wqXBENFI/7af21353122e60409a730e81ba9e434a/Aesop_Gift_Kits_2022-23_Web_Homepage_Secondary_Corporate_Gifting_Mid_Desktop_2560x1440px.jpg'/>
           <div className='content3'>
              <h6 className='c2'>Tokens of appreciation</h6>
              <h1 className="c1">Corporate gifts</h1>
              <h5 className="c2">Find a variety of gift-giving options, ideal for honouring<br/>treasured colleagues and clients. Trained consultants will<br/> be pleased to guide your selections and assist with <br/>delivery.</h5>
              <button className='btn'>Learn more about service &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BsArrowRight/></button>
           </div>
        </div>
        <div className='mid2-body'>
            <div className='content3'>
                <h1 className="c1">Store locator</h1>
                <h5 className="c2">Our consultants are available to host you in-store and<br/>provide tailored guidance on gift purchases</h5>
                <button className='btn'>Find nearby place &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BsArrowRight/></button>
            </div>
            <HorizontalScroll className='t1'></HorizontalScroll>
            <HorizontalScroll>
              {
                Images3.map((e, i) => {
                    return <div className='mid3-body'>
                    <div key={i} className="content5">
                       <figure>
                       <img src={e.photo} className="photo" />
                       <figcaption className='label'>{e.title}</figcaption>
                       </figure>
                   </div>
                   </div>
                })
              }
            </HorizontalScroll>
        </div>
           <div>
              <Footer/>
            </div>
          
        </div>
</> : <Mobile />
      }
    </div>
    
  );

}

export default App;

