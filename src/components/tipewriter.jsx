import React, { useState } from "react";

function Typewriter({ phrase1, phrase2, phrase3 }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const phrases = [phrase1, phrase2, phrase3];

  function startTyping() {
    setIsTyping(true);
    type();
  }

  function type() {
    let currentPhrase = phrases[phraseIndex];
    let currentText = typedText;
    let currentLetter = currentText.length;
    setTimeout(() => {
      setTypedText(currentPhrase.substring(0, currentLetter + 1));
      if (currentLetter === currentPhrase.length) {
        setTimeout(() => {
          setIsTyping(false);
          setPhraseIndex((phraseIndex + 1) % phrases.length);
        }, 2000);
      } else {
        type();
      }
    }, 100);
  }

  React.useEffect(() => {
    if (!isTyping) {
      startTyping();
    }
  }, [isTyping, phraseIndex]);

  return <div>{typedText}</div>;
}

export default Typewriter;