import React, { lazy, Suspense } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

let VideoComp = lazy(() => import('../components/VideoComp'))
function HeroSection() {
  return (
    <div className='hero-container'>
      <Suspense fallback={<h1>Loading...</h1>}>
        <VideoComp />
      </Suspense>
      <h1>Moon</h1>
      <p>Get your sweet dreams now!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Към продуктите
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          ГЛЕДАЙ TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
