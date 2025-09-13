import React from 'react'
import Hero from '../../../components/educator/student/Hero'
import Companies from '../../../components/educator/student/Companies'
import CoursesSection from '../../../components/educator/student/CoursesSection'
import TestimonialsSections from '../../../components/educator/student/TestimonialsSections'

const Home = () => {
  return (
    <div className = "flex flex-col items-center space-y-7 text-center">
      <Hero />
      <Companies />
      <CoursesSection />
      <TestimonialsSections/>
    </div>
  )
}

export default Home
