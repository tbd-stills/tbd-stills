import FadingDiv from '../components/FadingDiv';
import RotatingTypeWriter from '../components/RotatingTypeWriter';
import { homePagePhrases } from '../constants';
import Television from '../components/Television';

import homeBackground from '../assets/homeBackground.jpg';
import '../home/home.css';

function Home() {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <img className="cover" src={homeBackground} />
      <div className="home-container">
        <Television>
          <FadingDiv inverted={false}>
            <h1>TBD Stills</h1>
          </FadingDiv>
          <FadingDiv inverted={true}>
            <h1>coming soon...</h1>
          </FadingDiv>
          <RotatingTypeWriter phrases={homePagePhrases} />
        </Television>
      </div>
    </div>
  );
}

export default Home;
