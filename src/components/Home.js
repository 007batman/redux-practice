import React from 'react'
import Crud from './Crud'
import LoginPage from './LoginPage'
import Navbar from './Navbar'

const Home = () => {
  return (
      <>
      <Navbar title="The Master Crud" />
    <Crud/>
    </>
  )
}

export default Home