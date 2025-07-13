import { useState } from 'react';
import TypeWriter from './TypeWriter';

function getNextPhrase(currentPhrase: string, phrases: string[], isDeleting: boolean) {
  if (isDeleting) {
    // If we are currently deleting the phrase, we aren't ready to move onto the next
    return phrases.indexOf(currentPhrase);
  }
  else if (phrases.indexOf(currentPhrase) === (phrases.length - 1)) {
    return 0;
  }
  else {
    return phrases.indexOf(currentPhrase) + 1;
  }
}

export default function RotatingTypeWriter({ phrases }: { phrases: string[] }) {
  const [currentPhrase, setCurrentPhrase] = useState({
    text: phrases[0],
    isDeleting: false,
  });
  console.log('starting rotating typewriter', currentPhrase);
  // continuously iterate through the phrases
  // 1. Start the first phrase in a typewriter
  // 2. when the first word is complete, start deleting it
  // 3. when the first word is deleted, start the second
  // 4. do this until we are at the last word
  // 5. when we are at the last word, restart!
  const displayTime = 5000;
  const timeBetweenPhrases = 1000;

  function onComplete() {
    setTimeout(function () {
      setCurrentPhrase((prev) => {
        return { text: phrases[getNextPhrase(prev.text, phrases, !prev.isDeleting)], isDeleting: !prev.isDeleting };
      });
    }, currentPhrase.isDeleting ? timeBetweenPhrases : displayTime);
  };

  return (
    <TypeWriter text={currentPhrase.text} onComplete={onComplete} isDeleting={currentPhrase.isDeleting} />
  );
};
