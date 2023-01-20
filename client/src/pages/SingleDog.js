import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client'; 

import DogList from '../components/DogList';

import { QUERY_SINGLE_DOG} from '../utils/queries';


const SingleDog = () => {
  // Use `useParams()` to retrieve value of the route parameter `:dogName`
  const { dogName } = useParams();

  const { data } = useQuery(QUERY_SINGLE_DOG, {
    // pass URL parameter
    variables: { dogName: dogName},
  });

  const dog = data?.dog || {};

  
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {dog.name} <br />
      </h3>
      <div className="bg-light py-4">
      <h2> {dog.age} </h2>
      <h2> {dog.breed} </h2>
      </div>

    </div>
  );
};

export default SingleDog ;