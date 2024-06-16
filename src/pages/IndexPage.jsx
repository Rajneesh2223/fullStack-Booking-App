import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const IndexPage = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get('/places').then(response => {
      setPlaces([...response.data ,...response.data,...response.data]);
    });
  }, []); // Added an empty dependency array to ensure useEffect runs only once

  return (
    <div className='grid gap-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
    {places.length > 0 && places.map((place) => (
        <Link to={'/place/'+place._id} key={place.id}>
          <div className='bg-gray-500 mb-2 rounded-2xl flex' >
            {place.photo?.[0] ? (
           <img className='aspect-square object-cover 'src={'http://localhost:4000/uploads/' + place.photos?.[0]} alt="" />
               ) : (
            <img style={{ width: '298px', height: '250px' }} className=" rounded-2xl mx-auto  object-cover" src={'https://via.placeholder.com/250'} alt="Placeholder" />
              )}
            </div>
          <h2 className='text-sm'>{place.title}</h2>
          <h3 className='font-bold text-gray-400 truncate'>{place.address}</h3>
          <div className='mt-2'>
            <span className='font-bold'> ${place.price} per night</span>
           
          </div>
        </Link>
      ))}
  </div>
  
     
  
  );
};
