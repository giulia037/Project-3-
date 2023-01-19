import React from 'react';
import { Link } from 'react-router-dom';

//import Auth from '../../utils/auth';

const SingleDog = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <h1>Hello World</h1>
  );
};

export default SingleDog ;