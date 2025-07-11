import { getWindowDimensions, useMousePosition } from '../hooks/hooks';

import '../components/FadingCover.css';

interface Source {
  src: string;
}

export default function FadingCover(props: Source) {
  const mousePosition = useMousePosition();
  const dimensions = getWindowDimensions();

  const windowWidthPercentage: number = mousePosition.x / dimensions.width;
  const opacity: string = (
    1 -
    Math.round(windowWidthPercentage * 100) / 100
  ).toString();

  return (
    <div className="cover">
      <img style={{ width: '100%', opacity: opacity }} src={props.src} />;
    </div>
  );
}
