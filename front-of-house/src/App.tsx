import { getWindowDimensions, useMousePosition } from './hooks/hooks';
import './App.css';

function App() {
  const mousePosition = useMousePosition();
  const dimensions: object = getWindowDimensions();

  const windowWidthPercentage: number = mousePosition.x / dimensions.width;
  const opacity: string = (
    Math.round(windowWidthPercentage * 100) / 100
  ).toString();

  return (
    <div
      className="container"
      style={{
        backgroundColor: `rgba(52, 52, 52, ${opacity}`,
      }}
    >
      <p>
        Your cursor position:
        <br />
        {JSON.stringify(mousePosition)}
        {opacity}
      </p>
    </div>
  );
}

export default App;
