import React from 'react'
import banner1 from "../img/home.jpg";
import banner2 from "../img/appliance.jpg";
import banner3 from "../img/banner3.webp";



const Banner = () => {

    return (
        <div className="banner_container">
                <div className='banner_left'>
                    <div className='up_banner'>
                        <img src={banner1} className='banner_img'/>
                    </div>
                    <div className='down_banner'>
                        <img src={banner2} className='banner_img'/>
                    </div>
                </div>
                <div className='banner_right'>
                    <img src={banner3} className='banner_img'/>
                </div>
        </div>
    )
}

export default Banner
