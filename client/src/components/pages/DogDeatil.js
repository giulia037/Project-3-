import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import {QUERY_SINGLE_DOG} from '../../utils/queries'

function MovieDetail(props) {
  const {id} = useParams()
  const {loading, data} = useQuery (QUERY_SINGLE_DOG, {
    variables: {
    id
    }
  })
console.log (data)
const dog = data?.dog || {}
  return ( <> {
    loading? "No dog found":(
<div className="text-center">
      <img
        alt={dog.id}
        className="img-fluid"
        src={dog.image_url}
        style={{ margin: '0 auto' }}
      />
      <h3>Name: {dog.name}</h3>
      <h3>Age: {dog.age}</h3>
      <h3>Breed: {dog.breed}</h3>
    </div>
    )
  }
    </>
  );
}

export default MovieDetail;
