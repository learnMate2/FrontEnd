import React from 'react'
import Layout from '../components/layout/Layout'
import CareerHeroSection from '../components/career_counselig/CareerHeroSection'
import Counselors from '../components/career_counselig/Counselors'
import EasyWork from '../components/career_counselig/EasyWork'

const CareerCounselingPage = () => {
  return (
    <Layout>
      <CareerHeroSection/>
      <Counselors/>
      <EasyWork/>
    </Layout>
  )
}

export default CareerCounselingPage
