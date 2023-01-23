import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Furry Friends</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/About">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    // <ul className="navbar">
    //     <a
    //       href="/"
    //       // This is a conditional (ternary) operator that checks to see if the current page is "Home"
    //       // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
    //       className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Home
    //     </a>
      
    //   <li className="navbar">
    //     <a
    //       href="/About"
    //       // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //       className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
    //     >
    //       About
    //     </a>
    //   </li>
    //   <li className="navbar">
    //     <a
    //       href="/Contact"
    //       // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //       className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Contact
    //     </a>
    //   </li>
    //   <li className="navbar">
    //     <a
    //       href="#profile"
    //       onClick={() => handlePageChange('Profile')}
    //       // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //       className={currentPage === 'Profile' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Profile
    //     </a>
    //   </li>
    //   <li className="navbar">
    //     <a
    //       href="#signup"
    //       onClick={() => handlePageChange('Signup')}
    //       // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //       className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Signup
    //     </a>
    //   </li>
    //   <li className="navbar">
    //     <a
    //       href="#login"
    //       onClick={() => handlePageChange('Login')}
    //       // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //       className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Login
    //     </a>
    //   </li>
    // </ul>
  );
}

export default NavTabs;
