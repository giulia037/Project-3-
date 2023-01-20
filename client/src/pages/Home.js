import React from 'react';
import { useQuery } from '@apollo/client';

import DogList from '../components/DogList';

import { QUERY_DOG } from '../utils/queries';

const Home = () => {
  const { data } = useQuery(QUERY_DOG);
  const dogs = data?.dog || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <DogList
            dog={dogs}
            title="Avilable dogs"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
