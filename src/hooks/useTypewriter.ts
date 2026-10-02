import { useEffect, useState } from "react";

export function useTypewriter(words: readonly string[], pauseMs = 2000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    if (!word) return;

    if (!deleting && text === word) {
      const hold = window.setTimeout(() => setDeleting(true), pauseMs);
      return () => window.clearTimeout(hold);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((index) => (index + 1) % words.length);
      return;
    }

    const delay = deleting ? 40 : 80;
    const tick = window.setTimeout(() => {
      const nextLength = text.length + (deleting ? -1 : 1);
      setText(word.slice(0, nextLength));
    }, delay);

    return () => window.clearTimeout(tick);
  }, [deleting, pauseMs, text, wordIndex, words]);

  return text;
}
