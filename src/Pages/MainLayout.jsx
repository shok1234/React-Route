import {Outlet} from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import React from 'react'

const MainLayout = () => {
  return (
  <>
  <Header/>
  <Outlet/>
  <Footer/>
  </>
  )
}

export default MainLayout