import React, { useState } from 'react';
import "../Css/TrekDetail.css";

import Sign from "../components/Sign";
import TrekData from '../Data/Trekdata';
import Booking from '../components/Booking';
import Rev from "../components/Rev";

import { useParams, Link } from "react-router-dom";

const TrekDetail = () => {
    const { id } = useParams();
    const trek = TrekData.find((item) => {
    return item.id === parseInt(id);
    });
    return (
    <>
    <Sign />
        <section className='trek--section'>
            <main className='main--div'>
                <main className='left--div'>
                    <div className="detail">
                        <div className='detail--img--div'>
                            <img src={trek.imgSrc} className='detail--img' />
                        </div>
                    <div className='detail--info'>
                        <h2 className='detail--title'>{trek.title}</h2>
                        <div className='detail--rating'>
                        <span className='rate'>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <span><i className="fa-solid fa-star-half-alt"></i>4.6 (13)</span>
                        </span>
                    <span style={{ marginLeft: "70px", fontSize: "22px", fontWeight: "200" }} className='detail--location'>
                    <i className="fa-solid fa-location-dot" style={{ marginRight: "10px" }}></i>{trek.location}
                    </span>
                    <div className='detail--extra'>
                        <span className='price' style={{ fontSize: "18px" }}>
                        <i className="fa-solid fa-dollar-sign " style={{ marginRight: "10px" }}></i>{trek.price} / per person
                        </span>
                        <span style={{ marginLeft: "40px", fontWeight: "200" }}>
                        <i className="fa-solid fa-user-group" style={{ marginRight: "10px" }}></i>6-8 people per group
                        </span>
                    </div>
                    <h3>Description</h3>
                    <p>{trek.desc}</p>
                </div>
                </div>
                <div className='review'>
                <h4>Customer Reviews </h4>
                <form>
                    <div className='rev--div'>
                    <span>
                        1 <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                        2 <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                        3 <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                        4 <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                        5 <i className="fa-solid fa-star"></i>
                    </span>
                    </div>
                </form>
                <Rev/>
                </div>
            </div>
        </main>
        <main className='right--div'>
            <Booking trek={trek} />
        </main>
        </main>
    </section>
    </>
  );
}

export default TrekDetail;

