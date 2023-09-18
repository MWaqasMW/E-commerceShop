import React from 'react';
import Navbar from './components/Navbar';
import Baner from './components/Baner';
import Silder from './components/Silder';
import CategoryItem from './components/CategoryItem';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
<Baner/>
      <Navbar/>
      <Silder/>
      <CategoryItem/>
    </div>
  );
}

export default App;
