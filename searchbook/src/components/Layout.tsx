import React from 'react'
import {NavLink, Routes, Route} from 'react-router-dom'
import Search from './Search'
import Wishlist from './Wishlist'
import {Provider} from 'react-redux'
import {store} from '../redux/store'
import './booklist.css'
function Layout() {
  return (
    <>
      <nav>
          <ul>
              <li><NavLink to="/">search</NavLink></li>
              <li><NavLink to="/wishlist">wishlist</NavLink></li>
          </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Search />}/>
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </>
    

  )
}

export default Layout