import React, { useContext, useState } from 'react'
import { UserContext } from '../../UserContext.jsx';
import {  Navigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { PlacesPage } from './PlacesPage.jsx';
import { AccountNav } from '../AccountNav.jsx';

export const ProfilePage = () => {

const [redirect,setRedirect]=useState(false);
  const {ready,user,setUser} =useContext(UserContext);

  let {subpage} =useParams();
   if(subpage===undefined){
    subpage = 'profile';
   }
   async function logout() {
    
      await axios.post('/logout');
      setUser(null);
      setRedirect('/');  // Set the redirect path after successful logout
    
  }

  if(!ready){
    return 'Loading...';
  }
  
  if(ready  && !user && !redirect){
    return  <Navigate to={'/login'}/>
  }

  
   console.log(subpage);
 if(redirect){
  return <Navigate to={redirect} />;

 }

  return (
    <div>
      <AccountNav/>
      {subpage === 'profile' && (
        <div className='text-center max-w-lg mx-auto'>
          Logged in as {user.name} and ({user.email})<br />
          <button onClick={logout} className='primary max-w-sm mt-2'>
            Logout
          </button>
        </div>
      )}
      {subpage==='places'&&(
        <div>
          <PlacesPage/>
          </div>
      )}
    </div>
  )
}
