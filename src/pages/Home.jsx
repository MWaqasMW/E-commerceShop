
import React from 'react'
import Navbar from '../components/Navbar';
import Baner from '../components/Baner';
import Silder from '../components/Silder';
import Categories from '../components/Categories';
import Product from '../components/Product';
import NewsLeter from '../components/NewsLeter';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div>
      <Baner/>
      <Navbar/>
      <Silder/>
      <Categories/>
      <Product/>
      <NewsLeter/>
      <Footer/>
    </div>
  )
}

export default Home
