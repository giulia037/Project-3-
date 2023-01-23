import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_DOGS } from "../../utils/queries"


export default function Home() {
  const { loading, data } = useQuery(QUERY_DOGS)
  const dogs = data?.dogs || []
  console.log(dogs)
  return (
    <div className="header container-fluid">
      <div>
        <h1> Home Page</h1>
        <div className="home">
        </div>
        <div className='row card-group' >
          {loading? 'No dogs found': dogs.map(dog => {
            return (
              <div class="col-sm-3">
            <div class="row">
              <div className="card">
                <img
                src = {dog.image_url}
                  alt={""}
                  className=" card-img-top"
                  style={{ margin: '0 auto' }}
                />
                <a href= {'/DogDetail/'+ dog._id} >
                <h3>Name: {dog.name} </h3>
                </a>
                <h3>Age: {dog.age}</h3>
                <h3>Breed: {dog.breed} </h3>
              </div>
            </div>
          </div>
            )
          })}
          {/* <div class="column">
            <div class="row">
              <div className="card">
                <img
                  alt={""}
                  className="img-fluid"
                  style={{ margin: '0 auto' }}
                />
                <h3>Name: </h3>
                <h3>Age: </h3>
                <h3>Breed: </h3>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="row">
            <div className="card">
              <img
                alt={""}
                className="img-fluid"
                style={{ margin: '0 auto' }}
              />
              <h3>Name: </h3>
              <h3>Age: </h3>
              <h3>Breed: </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="row">
          <div className="card">
            <img
              alt={""}
              className="img-fluid"
              style={{ margin: '0 auto' }}
            />
            <h3>Name: </h3>
            <h3>Age: </h3>
            <h3>Breed: </h3>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="row">
          <div className="card">
            <img
              alt={""}
              className="img-fluid"
              style={{ margin: '0 auto' }}
            />
            <h3>Name: </h3>
            <h3>Age: </h3>
            <h3>Breed: </h3>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="row">
          <div className="card-2">
            <img
              alt={""}
              className="img-fluid"
              style={{ margin: '0 auto' }}
            />
            <h3>Name: </h3>
            <h3>Age: </h3>
            <h3>Breed: </h3>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="row">
          <div className="card-2">
            <img
              alt={""}
              className="img-fluid"
              style={{ margin: '0 auto' }}
            />
            <h3>Name: </h3>
            <h3>Age: </h3>
            <h3>Breed: </h3>
          </div>*/}
        </div> 
      </div>
    </div>
  );
}
