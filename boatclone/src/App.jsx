import React from 'react';
import Topbar from '../components/TopBar/topbar'; // Importing the Topbar component
import Slideanimation from '../components/SlideAnimation/slideanimation';
import Bestseller from '../components/BestSellers/bestseller';
import Dailydeals from '../components/DailyDeals/dailydeals';
import Shopitems from '../components/ShopItems/shopitems';
import Catogries from '../components/Catogries/catogries';
import Features from '../components/FeatureS/features';
import Lifestyle from '../components/LifeStyle/lifestyle';
import Bestofboat from '../BestOfBoat/bestofboat';
import Shoptwo from '../components/ShopItems/shoptwo';
import Jointhetribe from '../components/JointheTribe/jointhetribe';
import Blogs from '../components/BlogPosts/blogs';
import ContactUs from '../components/ContactUs/contactus';

const App = () => {
  return (
    <>
      <Topbar />
      <Slideanimation/>
      <Bestseller/>
      <Dailydeals/>
      <Shopitems/>
      <Catogries/>
      <Shoptwo/>
      <Features/>
      <Lifestyle/>
      <Bestofboat/>
      <Jointhetribe/>
      <Blogs/>
      <ContactUs/>
    </>
  );
};

export default App;