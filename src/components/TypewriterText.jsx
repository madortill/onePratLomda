import { useEffect } from "react";
import "../css/TypewriterText.css";

export default function TypewriterText({
  lines,
  delayPerLine = 1.9,
  typingDuration = 2,
  onComplete,
}) {
  useEffect(() => {
    const totalTime =
      (lines.length - 1) * delayPerLine + typingDuration;

    const timer = setTimeout(() => {
      onComplete?.();
    }, totalTime * 1000);

    return () => clearTimeout(timer);
  }, [lines.length, delayPerLine, typingDuration, onComplete]);

  return (
    <div className="typewriter-text" dir="rtl">
      {lines.map((line, index) => (
        <p
          key={index}
          className="typewriter-line"
          style={{
            "--delay": `${index * delayPerLine}s`,
            "--duration": `${typingDuration}s`,
            "--width": `${line.length}ch`,
          }}
        >
          {line}
        </p>
      ))}
    </div>
  );
}