import React from 'react'
import Slider from 'react-slick'
import './BannerSlider.css'

const BannerSlider = () => {
    const data = [
        {
            id: 1,
            image: 'https://th.bing.com/th/id/OIP.vCn-uL7b2JKfrVxjTiEL9wHaDf?w=333&h=164&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            button: 'htttps://www.google.com'
        },
        {
            id: 2,
            image: 'https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_bcd_250923_400.jpg?tr=w-1920,q=80',
            button: 'htttps://www.google.com'
        },
        {
            id:3,
            image:'https://www.bigbasket.com/media/uploads/banner_images/hp_m_health_suppliment_250923_400.jpg?tr=w-1920,q=80',
            button:'htttps://www.google.com'
        }
    ]


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <div className='bannerslider'>
            <Slider className='bannerslider' {...settings}>
                {
                    data.map(item => {
                        return (
                            <div className='imagecont' key={item.id}>
                                <img src={item.image} alt='noimg' />
                                <div className='content'>
                                    <h1>{item.title}</h1>
                                    <span>{item.description}</span>
                                    <button>Shop More</button>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default BannerSlider