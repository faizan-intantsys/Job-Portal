import React from 'react';
import Header from './Home Components/Header';
import HeroSection from './Home Components/HeroSection';
import Footer from './Home Components/Footer';
import StatsSection from './Home Components/StatsSection';
import TopRecruiters from './Home Components/TopRecruiters';

export const Home = () => {
  return (
    <>
    <Header/>
    <HeroSection/>
    <StatsSection/>
    <TopRecruiters/>
    <Footer/>
    </>
  )
}
