import React from 'react';
import Hero from './components/Hero';
import WorkflowTile from './components/WorkflowTile';
import JoinTodayBanner from './components/JoinTodayBanner';
import CollaborationBanner from './components/CollaborationBanner';

const LandingPage: React.FC = () => {
  return (
  <main className='bg-[#EEF0FF] w-screen h-screen flex flex-col'>
    <Hero />
    <WorkflowTile />
    <CollaborationBanner/>
    <JoinTodayBanner/>
  </main>);
};

export default LandingPage;
