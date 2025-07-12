import FadingDiv from '../components/FadingDiv';
import TypeWriter from '../components/TypeWriter';

import homeBackground from '../assets/homeBackground.jpg';
import '../home/home.css';

function Home() {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <img className="cover" src={homeBackground} />
      <div className="home-container">
        <FadingDiv inverted={false}>
          <h1>TBD Stills</h1>
        </FadingDiv>
        <FadingDiv inverted={true}>
          <h1>coming soon...</h1>
        </FadingDiv>
        <TypeWriter text="Made by humans, with love" />
      </div>
    </div>
  );
}

export default Home;
