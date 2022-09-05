import React from 'react';
import "./topBrands.css";
import NextArrow from "../../common/carousel/nextArrow";

import PrevArrow from "../../common/carousel/prevArrow";
import Slider from "react-slick";
const topBrandsList =[
    {
        id: 1,
        time: "23 min",
        title:"Harilal's",
        cover:
        "https://b.zmtcdn.com/data/brand_creatives/logos/77d5b489b0ea3773900191553512b17d_1605103915.png"

    },
    {
        id: 2,
        time: "30 min",
        title:"Domino's Pizza",
        cover:
        "https://b.zmtcdn.com/data/brand_creatives/logos/5caf38856d23347b351bb7abf97134d3_1521806923.png"

    },
    {
        id: 3,
        time: "28 min",
        title: "Haldiram",
        cover:
        "https://b.zmtcdn.com/data/brand_creatives/logos/b33aaf8c14823c85b0470fdce138fa81_1617931389.png"

    },
    {
        id: 4,
        time: "26 min",
        title: "KFC",
        cover:
        "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433965.png"

    },
    {
        id: 5,
        time: "25 min",
        title: "Bikaner",
        cover:
        "https://b.zmtcdn.com/data/brand_creatives/logos/1005fb0c9e31b63b7c3f9e825d62a3d8_1605103758.png"

    },
    {
        id: 6,
        time: "42 min",
        title: "Behrouz Biryani",
        cover:
        "https://b.zmtcdn.com/data/brand_creatives/logos/d500dedcd7c797c52071e64e6b3df6b4_1638299963.png"

    },
    {
        id: 7 ,
        time: "90 min",
        title: "Biryani By Kilo",
        cover:
        "https://b.zmtcdn.com/data/brand_creatives/logos/aab62e9430abe896ed05830f09475852_1625157587.png"

    },
    {
        id: 8,
        time: "33 min",
        title:"Haldiram's Prabhuji",
        cover:
        "https://b.zmtcdn.com/data/brand_creatives/logos/61267211f906b5cd5d73012a3b639341_1614934123.png"

    },
    
    
];
const settings = {
    
    infinite: false,
    slidesToShow:5,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,

    prevArrow: <PrevArrow/>
  };

const TopBrands = () => {
  return (
    <div className='top-brands max-width'>
        <div className='collection-title'>Top Brands for you</div>
        <Slider {...settings}>
{topBrandsList.map((brand)=>{
    return <div>
        <div className='top-brands-cover'>
            <img src={brand.cover} className="top-brands-image" alt={brand.title}/>
        </div>
        <div className='top-brands-name absolute-center '>{brand.title}</div>
        <div className='top-brands-time absolute-center'>{brand.time}</div>
    </div>
})}
        </Slider>
    </div>
  );
};

export default TopBrands;