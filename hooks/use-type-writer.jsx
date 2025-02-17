import { useEffect, useState } from "react";

export function useTypeWriter(text, speed = 50 ) {
  const [displayedText, setDisplayedText] = useState("");
  const [isCompleted, setIsComplete] = useState(false);
  useEffect(() => {
      let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);
    return () => {
      clearInterval(timer);
    };
  }, [text, speed]);
  return { displayedText, isCompleted };
}
