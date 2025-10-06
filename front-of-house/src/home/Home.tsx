import { useState } from 'react';

import FadingDiv from '../components/FadingDiv';
import RotatingTypewriter from '../components/RotatingTypewriter';
import { homePagePhrases } from '../constants';
import Television from '../components/Television';

import homeBackground from '../assets/homeBackground.jpg';
import '../home/Home.css';

function Home() {
  const [isTVHidden, setIsTVHidden] = useState(false);
  const [isTypewriterHidden, setIsTypewriterHidden] = useState(true);
  const [animationIsOngoing, setAnimationIsOngoing] = useState(false);
  if (!isTVHidden) {
    setTimeout(function () {
      setAnimationIsOngoing(true);
      setIsTVHidden(true);
    }, 8000);
    setTimeout(function () {
      setIsTypewriterHidden(false);
    }, 10000);
    setTimeout(function () {
      setAnimationIsOngoing(false);
    }, 12000);
  }

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <img className={`cover ${isTVHidden ? 'unblur' : ''}`} src={homeBackground} />
      <div className="home-container">
        <div className={`home-television-wrapper ${isTVHidden ? 'tv-hidden' : ''}`}>
          {((isTVHidden && !animationIsOngoing) || (!isTypewriterHidden && animationIsOngoing))
            ? (
                <>
                  <FadingDiv inverted={false}>
                    <h1>TBD Stills</h1>
                  </FadingDiv>
                  <FadingDiv inverted={true}>
                    <h1>coming soon...</h1>
                  </FadingDiv>
                  <RotatingTypewriter phrases={homePagePhrases} />
                </>
              )
            : (
                <Television>
                  <video autoPlay muted>
                    <source src="https://res.cloudinary.com/djxvt5rzr/video/upload/v1759704292/coming_soon_zwlowm.mov" type="video/mp4" />
                    Your browser does not support HTML video.
                  </video>
                </Television>
              )}
        </div>
      </div>
    </div>
  );
}

export default Home;
