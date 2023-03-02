import React from 'react'
import About from '../about/About'
import Types from '../types/Type'
import SuggestedPlaces from '../suggestedPlace/SuggestedPlace'
import classes from './home.module.css'

const Home = () => {
  return (
    <section id='#' className={classes.container}>
        <About />
        <Types />
        <SuggestedPlaces />
    </section>
  )
}

export default Home