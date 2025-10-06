import { useState } from 'react';

function getTypewriterSubstring(text: string, index: number, isDeleting: boolean): string {
  if (isDeleting) {
    return text.substring(0, text.length - index);
  }
  else {
    return text.substring(0, index);
  }
};

export default function Typewriter(
  { text, isDeleting, onComplete }: { text: string; isDeleting: boolean; onComplete: () => void },
) {
  const [currentText, setCurrentText] = useState('');

  const interval = 30;

  if ((currentText === '' && !isDeleting) || (text === currentText && isDeleting)) {
    console.log('writing');
    for (let index = 1; index < text.length + 1; index++) {
      setTimeout(function () {
        setCurrentText(getTypewriterSubstring(text, index, isDeleting));
        if (index == text.length) {
          onComplete();
        }
      }, (index) * interval);
    }
  }
  return (
    <p>
      {currentText}
    </p>
  );
}
