import React from 'react'
import NavbarDashboard from './NavbarDashboard'

const MainDashboard = () => {
  return (
    <div className='bg-gray-100 shadow-2xl border border-grey w-72 h-72 ml-10 rounded-3xl p-5'>
        <div className='text-gray-500 text-sm'>NAVIGASI</div>
        <ul className='p-3'>
          <li  className='py-1 pr-15 pl-2 hover:bg-gray-200 rounded-3xl'>● Peminjaman</li>
          <li  className='py-1 pr-15 pl-2 hover:bg-gray-200 rounded-3xl'>● Peminjaman</li>
          <li  className='py-1 pr-15 pl-2 hover:bg-gray-200 rounded-3xl'>● Peminjaman</li>
          <li  className='py-1 pr-15 pl-2 hover:bg-gray-200 rounded-3xl'>● Peminjaman</li>
        </ul>
    </div>
  )
}

export default MainDashboard
