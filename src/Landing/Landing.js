import React from 'react';
import Hero from './Hero/Hero';
import Information from './Information/Information';
import Characteristic from './Characteristic/Characteristic'
import Process from './Process/Process';

function Landing() {
  return (
    <div>
      <Hero />
      <Information />
      <Characteristic />
      <Process />
    </div>
  );
}

export default Landing;
