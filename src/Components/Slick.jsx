import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slick.css';

export default function Slick() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className="conatiner-fluid" style={{backgroundColor:"#effafa"}}>
            <div className="container">
                <div className="py-2 pb-5">
                    <h1 className="text-center title mb-5">OUR PRODUCTS</h1>
                    <Slider {...settings}>
        
                        <div className=" position-relative effect w-auto mx-2">
                            <img src="media/bt2.jpeg" className="m-auto position-relative img-fluid"/>
                            <div className="overlay">
                                <div className="txt w-100">
                                    <p>Emperia 1900 Vol-1111 Toilet Cleaner 5 Liters</p>
                                    <p>1400.00</p>
                                    <button className="btn">ADD TO CART</button>
                                </div>   
                            </div>
                        </div>
                        <div className=" position-relative effect  w-auto mx-2">
                            <img src="media/bt2.jpeg" className=" w-100 position-relative img-fluid"/>
                            <div className="overlay px-3">
                                <div className="txt w-100">
                                    <p>Emperia 1900 Vol-1111 Toilet Cleaner 5 Liters</p>
                                    <p>1400.00</p>
                                    <button className="btn">ADD TO CART</button>
                                </div>   
                            </div>
                        </div>
                        <div className=" position-relative effect  w-auto mx-2">
                            <img src="media/bt2.jpeg" className=" w-100 position-relative img-fluid"/>
                            <div className="overlay px-3">
                                <div className="txt w-100">
                                    <p>Emperia 1900 Vol-1111 Toilet Cleaner 5 Liters</p>
                                    <p>1400.00</p>
                                    <button className="btn">ADD TO CART</button>
                                </div>   
                            </div>
                        </div>
                        <div className=" position-relative effect  w-auto mx-2">
                            <img src="media/bt2.jpeg" className=" w-100 position-relative img-fluid"/>
                            <div className="overlay px-3">
                                <div className="txt w-100">
                                    <p>Emperia 1900 Vol-1111 Toilet Cleaner 5 Liters</p>
                                    <p>1400.00</p>
                                    <button className="btn">ADD TO CART</button>
                                </div>   
                            </div>
                        </div>
                        <div className=" position-relative effect  w-auto mx-2">
                            <img src="media/bt2.jpeg" className=" w-100 position-relative img-fluid"/>
                            <div className="overlay px-3">
                                <div className="txt w-100">
                                    <p>Emperia 1900 Vol-1111 Toilet Cleaner 5 Liters</p>
                                    <p>1400.00</p>
                                    <button className="btn">ADD TO CART</button>
                                </div>   
                            </div>
                        </div>

                        
                      
                    </Slider>
                </div>
            </div>
        </section>
    );
}