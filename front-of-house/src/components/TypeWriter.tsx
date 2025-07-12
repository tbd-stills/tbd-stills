import { useState } from 'react';

export default function TypeWriter({ text }: { text: string }) {
  const [currentText, setCurrentText] = useState('');

  const interval = 60;

  if (currentText === '') {
    for (let index = 1; index < text.length + 1; index++) {
      setTimeout(function () {
        setCurrentText(text.substring(0, index));
      }, (index) * interval);
    }
  }
  return (
    <p>
      {currentText}
    </p>
  );
}
