import React, { useState, lazy, Suspense } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

let VideoComp = lazy(() => import('../components/VideoComp'))
function HeroSection() {
  const [videoOn, setVideoOn] = useState(false);

  function onClickVideoHandler(e) {
    if(!videoOn) {
      setVideoOn(true)
    } else {
      setVideoOn(false)
    }
  }
  return (
    <div className='hero-container'>
      <Suspense fallback={<h1>Loading...</h1>}>
        <VideoComp />

        <h1>Moon</h1>
        <p>Get your sweet dreams now!</p>
      </Suspense>
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
          onClick={onClickVideoHandler}
        >
          {videoOn?'CLOSE TRAILER': 'PLAY TRAILER'} <i className={videoOn?'fas fa-music':'far fa-play-circle'} />
        </Button>
      </div>
      {videoOn ? (<iframe width="560" height="315" 
      src="https://www.youtube.com/embed/H1Gz0pF56RI?start=1&mute=0&autoplay=1&mute=0&controls=0"
      title="This is the trailer video"
       frameborder="2" ></iframe>) : ''}
    </div>
  );
}

export default HeroSection;
