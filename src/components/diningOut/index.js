import React from 'react';
import { diningOut } from '../../data/diningOut';
import Collection from '../common/collection';
import ExploreSection from '../common/exploreSection';
import Filters from '../common/filters';
import "./diningOut.css";
const collectionList=[
  {
    id:"1",
    title:"Newly Opened",
    cover:"https://b.zmtcdn.com/data/collections/b22194cb38ed18a5200b387ad8f243f0_1582015799.jpg",
    places:"8 Places"
  },
  {
    id:"2",
    title:"Trending This Week",
    cover:"https://b.zmtcdn.com/data/collections/f60eb469dbcdadaaa48c8be4f5ba48b3_1646040552.png",
    places:"30 Places"
  },
  {
    id:"3",
    title:"Best of Bangalore",
    cover:"https://b.zmtcdn.com/data/collections/712ee166f48312fa572eac04f5b71d59_1615435760.jpg",
    places:"51 Places"
  },
  {
    id:"4",
    title:"Brilliant Biryani",
    cover:"https://b.zmtcdn.com/data/collections/d66334f10b958a3ca6df9f4e4d7a881c_1631862999.jpg",
    places:"30 Places"
  },
  {
    id:"5",
    title:"Aromatic Coffee",
    cover:"https://b.zmtcdn.com/data/collections/2e0b63986e33036c45cf17fef3a740ac_1611749485.jpg",
    places:"29 Places"
  },
  {
    id:"6",
    title:"Street Food",
    cover:"https://b.zmtcdn.com/data/collections/4c59b895acfa4879b87f6c1d81ca5855_1615437858.jpg",
    places:"24 Places"
  },
  {
    id:"7",
    title:"Rooftops",
    cover:"https://b.zmtcdn.com/data/collections/14fa741ee65b838680a95a4cd7b9faa4_1582201565.jpg",
    places:"30 Places"
  }
];
const diningFilters=[
  {
    id:1,
    icon: <i className='fi fi-rr-settings-sliders absolute-center'></i>,
    title: 'Filters',

  },
  {
    id:2,
    
    title: 'Rating: 4.0+',

  },
  {
    id:3,
    
    title: 'Safe and Hygienic',

  },
  {
    id:4,
    
    title: 'Pure Veg',

  },
  {
    id:5,
    icon: <i className='fi fi-rr-apps-sort absolute-center'></i>,
    title: 'Delivery Time',

  },
  {
    id:6,
    
    title: 'Great Offers',

  },
];
const diningList = diningOut;
const DiningOut = () => {
  return (
    <div>
      <Collection list={collectionList}/>
      <div className='max-width'>
        <Filters filterList={diningFilters}/>
      </div>
      <ExploreSection
       list={diningList}
       collectionName="Dine-out Restaurants in Bangalore"
       />
    </div>
  )
}

export default DiningOut