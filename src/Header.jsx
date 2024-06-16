import React from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext.jsx'
import { useContext } from 'react'

export const Header = () => {
   const {user}= useContext(UserContext)


  return (
    <div>
         <header className=' flex justify-between'> 
    <Link to='/' href="" className="flex items-center gap-1">
    <svg xmlns="http://www.w3.org/2000/svg" className="-rotate-90 w-8 -h-8 " fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
     <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
    </svg>
     <span className= ' text-red-500 font-bold text-xl'>AirBond</span>
    </Link>

  <div className='flex border gap-2 border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300'>
   <div>Anywhere</div>
   <div className=' border-l border-gray-300'></div>
   <div>Anyweek</div>
   <div className=' border-l border-gray-300'></div>
   <div>Add Guests</div>
   <div className=' border-l border-gray-300'></div>
   <button className='bg-primary text-white p-1 rounded-full'>
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
<path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
</svg>

   </button>
  </div>

  <Link  to={user?'/account':'/login'}className='flex items-center border gap-2 border-gray-300 rounded-full py-2 px-4 '>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6">
<path fillRule="evenodd" d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
</svg>
<div className='bg-gray-500 text-white rounded-full border border-gray-500  overflow-hidden '>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1">
<path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
</svg>


</div>
{!!user && (
  <div>
    {user.name}
  </div>
)

}


  </Link>



  </header>
</div>
  )
}
