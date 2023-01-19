import React from 'react';
import { Link } from 'react-router-dom';

//import Auth from '../../utils/auth';

const AdoptionForm = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <h1>Hello World</h1>
  );
};

export default AdoptionForm;