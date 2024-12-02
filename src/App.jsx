import React from 'react'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Product from './Components/Products';
import TopProducts from './Components/TopProducts';
import Banner from './Components/Banner';
import Subscribe from './Components/Subscribe';
import Testimonials from './Components/Testimonials';
import Popup from './Components/Popup';
import Footer from './Components/Footer';
import AOS from "aos";
import "aos/dist/aos.css";







const App = () => {

  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };


  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);


  return (
  <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
    <Navbar handleOrderPopup={handleOrderPopup}/>
    <Hero handleOrderPopup={handleOrderPopup}/>
    <Product/>
    <TopProducts handleOrderPopup={handleOrderPopup}/>
    <Banner/>
    <Subscribe/>
    <Product/>
    <Testimonials/>
    <Footer/>
    <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
  </div>
  );
};

export default App;
