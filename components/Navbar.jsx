import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-slate-100 ">
    <div className="navbar-start">
      <div className="dropdown sm:hidden">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link href={'/'}>PHONE CASE</Link></li>
          <li><Link href={'/'}>PHONE</Link></li>
          <li><Link href={'/'}>WATCHES</Link></li>
          <li><Link href={'/'}>ACCESSORIES</Link></li>
        </ul>
      </div>
    </div>
    <div className="navbar-center max-sm:hidden">
      <Link href={'/'} className="btn btn-ghost normal-case text-xl">PHONE</Link>
      <Link href={'/'} className="btn btn-ghost normal-case text-xl">PHONE CASE</Link>
      <Link href={'/'} className="btn btn-ghost normal-case text-xl">WATCHES</Link>
      <Link href={'/'} className="btn btn-ghost normal-case text-xl">ACCESSORIES</Link>
    </div>
    <div className="navbar-end">
      
      <button className="btn btn-ghost btn-circle">
        <div className="indicator">
          <span className="mr-2 text-xl">🛒</span>
          <span className="badge badge-xs badge-primary indicator-item py-2" >0</span>
        </div>
      </button>
    </div>
  </div>
  )
}

export default Navbar