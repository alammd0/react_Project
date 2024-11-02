import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'; // Ensure this is imported
import "./Home.css"
import { NavLink } from 'react-router-dom';
import HomeCards from '../Home/HomeCards';
import { homeCards } from '../../data';
import Footer from '../Footer';

const Home = () => {



  const images = [
    { url: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { url: 'https://images.unsplash.com/photo-1451859757691-f318d641ab4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHdhdGNofGVufDB8fDB8fHww' },
    { url: 'https://images.unsplash.com/photo-1525342306245-c6a1e32087ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8' },
    { url: 'https://images.unsplash.com/photo-1554151447-b9d2197448f9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { url: 'https://images.unsplash.com/photo-1549972574-8e3e1ed6a347?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
  ];

  const divStyle = {
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '600px',
    width: '1280px',
    margin: '0 auto',
    borderRadius: "8px"
  };

  return (
    <div className='home_Container'>
      <div className='duplicate_container'>
        <div className='home_wrapper'>
          <Slide arrows={false} duration={1000} transitionDuration={500} autoplay>
            {images.map((image, index) => (
              <div key={index} style={{ ...divStyle, backgroundImage: `url(${image.url})` }}>
              </div>
            ))}
          </Slide>

          <div className='overlap_contain'>
            <h2>TIMELESS QUALITY</h2>
            <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you</p>
            <button className='over_btn'><NavLink className="hero_btn" to="/shop">Shop Now</NavLink></button>
          </div>


        </div>

        <div className='card_section'>
          <HomeCards homeCards={homeCards} />
        </div>


        <div>
          <Footer/>
        </div>


      </div>

    </div>
  );
};

export default Home;
