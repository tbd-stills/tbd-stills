import FadingCover from '../components/fadingBackground';

import homeBackground from '../assets/homeBackground.jpg';
import '../home/home.css';

function Home() {
  return (
    <>
      <FadingCover src={homeBackground} />
      <div
        className="container"
        style={{
          backgroundColor: `rgb(32, 32, 32)`,
        }}
      >
        <h1 style={{ color: 'white' }}>Coming soon...</h1>
      </div>
    </>
  );
}

export default Home;
