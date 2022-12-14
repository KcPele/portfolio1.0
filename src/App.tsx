import React, { useEffect } from 'react';
import './App.scss';
import { About, Header, Testimonial, Skills, Work, Footer } from './container';
import { Navbar } from './components';
const  App: React.FC = () => {
//   useEffect(() => {
//     document.getElementsByTagName("img").setAttribute('draggable', false);
// }, [])
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
