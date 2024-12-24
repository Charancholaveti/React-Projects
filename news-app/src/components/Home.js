/* Slick Carousel CSS */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

import React, { Component } from 'react';
import Slider from 'react-slick';
import sp from './bus.jpg';
import he from './fr.jpg';
import bah from './enter.jpg';
import br from './br.jpg';
import tech from './tech.jpg';
import './home.css';
export default class Home extends Component {
  render() {
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
    };

    const sliderImages = [
      { id: 1, src:sp, alt: "Breaking News 1", title: "Sports News" },
      { id: 2, src:br, alt: "Breaking News 2", title: "Breaking News " },
      { id: 3, src:tech, alt: "Breaking News 3", title: "Technology News " },
      { id: 4, src:he, alt: "Health News ", title: "Health News " },
      { id: 5, src:bah , alt: "Entertainment News ", title: "Entertainment News " },
    ];

    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1 style={{color:"black"}}>Welcome to Newzify</h1>
        <p>Your one-stop destination for all the latest news!</p>
        
        {/* Image Slider */}
        <div style={{ width: "40%", margin: "auto", marginTop: "20px" ,height:"50%" }}>
          <Slider {...sliderSettings}>
            {sliderImages.map((image) => (
              <div key={image.id}>
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{ width: "100%", borderRadius: "10px",height:"300px" }}
                />
                <h3>{image.title}</h3>
                <br></br>
              </div>
            ))}
          </Slider>
        </div>
        <Link to="/general"><button type="button" className="btn btn-outline-light" style={{marginTop: "70px",width:"200px",height:"50px",fontSize:"larger",backgroundColor:"black"}}
>        Let's Start</button></Link>

      </div>
    );
  }
}
