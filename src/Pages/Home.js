import React from 'react';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Movies from '../components/Movies';

const Home = () => {
    return (
        <div>
          <Carousel />
          <Movies />
          <Footer />  
        </div>
    );
};

export default Home;