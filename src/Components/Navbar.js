import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../redux/slices/SearchSlice';

function Navbar() {
  const dispatch = useDispatch();
  return (
    <nav className='flex flex-col lg:flex-row justify-between mx-6 py-3 mb-8'>
<div>
    <h3 className='text-xl font-bold text-gray-600'>{new Date().toUTCString().slice(0,16)}</h3>
    <h1 className='text-2x1 font-bold'>Food Ordering App</h1>
</div>
<div>
<input type='search' name='search' id='' placeholder='Search here' autoComplete='off'
onChange={(e)=>dispatch(setSearch(e.target.value))}
 className='p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]'/>

</div>
    </nav>
  )
}

export default Navbar