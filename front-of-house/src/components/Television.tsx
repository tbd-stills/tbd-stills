import '../components/Television.css';

const TELEVISION_ASSET = 'https://res.cloudinary.com/djxvt5rzr/image/upload/v1759615373/tv-png-the-whole-enchilada-the-whole-enchilada-9-1611986817_lutcj5.png';

function Television({ children }: { children: React.ReactNode }) {
  return (
    <div className="television-container">
      <img className="television" src={TELEVISION_ASSET} />
      <div className="television-content">
        { children }
      </div>
    </div>
  );
}

export default Television;
