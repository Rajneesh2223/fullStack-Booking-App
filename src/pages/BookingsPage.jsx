import React, { useEffect, useState } from 'react'
import { AccountNav } from '../AccountNav'
import PlaceImg from '../PlaceImg';
import axios from 'axios';

export const BookingsPage = () => {
    const [bookings,seetBookings]=useState([]);
    useEffect(()=>{
        axios.get('/bookings').then(response=>{
seetBookings(response.data);
        })
    },[])



  return (
    <div>
     <AccountNav/>
     <div>
     {bookings?.length > 0 && bookings.map((booking) => (
  <div>
    <div>
       <PlaceImg place={booking.place}/>
      </div>

    {booking.checkIn} - {booking.checkOut}
  </div>
))}

     </div>

    </div>
  )
}
