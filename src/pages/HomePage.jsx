import React from 'react'
import Hero from "../components/Hero"
import JobsListings from '../components/JobsListings'
import HomeCards from "../components/HomeCards"
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
        <Hero/>
        <HomeCards/>
        <JobsListings isHome ={true} />
        <ViewAllJobs/>
    </>
  )
}

export default HomePage