import React, { useState } from 'react';
import Adoption from '../pages/Adoption';
import NavTabs from '../NavTabs';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import SingleDog from '../pages/SingleDog'

export default function DogList() {
  const [currentPage, setCurrentPage] = useState('Home');


  
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Adoption') {
      return <Adoption />;
    }
    if (currentPage === 'SingleDog') {
      return <SingleDog />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page)

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}

  
