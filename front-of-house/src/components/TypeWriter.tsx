import { useState } from 'react';

function getTypeWriterSubString(text: string, index: number, isDeleting: boolean): string {
  if (isDeleting) {
    return text.substring(0, text.length - index);
  }
  else {
    return text.substring(0, index);
  }
};

export default function TypeWriter(
  { text, isDeleting, onComplete }: { text: string; isDeleting: boolean; onComplete: () => void },
) {
  const [currentText, setCurrentText] = useState('');

  const interval = 60;

  if ((currentText === '' && !isDeleting) || (text === currentText && isDeleting)) {
    console.log('writing');
    for (let index = 1; index < text.length + 1; index++) {
      setTimeout(function () {
        setCurrentText(getTypeWriterSubString(text, index, isDeleting));
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
