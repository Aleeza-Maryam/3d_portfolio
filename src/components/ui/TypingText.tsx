"use client";

import { useEffect, useState } from "react";

interface TypingTextProps {
  texts: string[];
  speed?: number;
  delay?: number;
}

export default function TypingText({ texts, speed = 100, delay = 2000 }: TypingTextProps) {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentFullText = texts[textIndex];
      
      if (!isDeleting) {
        // Typing
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
        if (currentText === currentFullText) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        // Deleting
        setCurrentText(currentFullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, textIndex, texts, speed, delay]);

  return (
    <span className="inline-block min-w-[200px]">
      {currentText}
      <span className="animate-pulse text-[#3b82f6]">|</span>
    </span>
  );
}