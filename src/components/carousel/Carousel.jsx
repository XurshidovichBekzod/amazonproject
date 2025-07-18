import "./Caousel.css"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/sell.jpg"
import img2 from "../../assets/buy.jpg"
import img3 from "../../assets/toys.jpg"

const images = [
    img1,
    img2,
    img3
];

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500
    };
    return (
        <div style={{ width: "100%", margin: "0 auto" }}>
            <Slider {...settings}>
                {images.map((img, index) => (
                    <div key={index}>
                        <img
                            src={img}
                            alt={`Slide ${index}`}
                            style={{ width: "100%", height: "400px", objectFit: "cover" }}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Carousel