import React from 'react';
import { getWindowDimensions, useMousePosition } from '../hooks/hooks';

import '../components/FadingDiv.css';

function getPercentage(inverted: boolean, percent: number) {
  if (inverted) {
    return 1 - Math.round(percent * 100) / 100;
  }
  else {
    return Math.round(percent * 100) / 100;
  }
}

export default function FadingDiv({ inverted = false, children }: { inverted: boolean; children: React.ReactNode }) {
  const mousePosition = useMousePosition();
  const dimensions = getWindowDimensions();

  const windowWidthPercentage: number = mousePosition.x / dimensions.width;

  const opacity: string = (
    getPercentage(inverted, windowWidthPercentage)
  ).toString();

  return (
    <div style={{ opacity: opacity }}>
      { children }
    </div>
  );
}
