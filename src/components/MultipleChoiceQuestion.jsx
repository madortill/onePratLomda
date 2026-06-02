import { useState } from "react";
import "../css/MultipleChoiceQuestion.css";

export default function MultipleChoiceQuestion({
  question,
  answers = [],
  correctAnswers = [],
  onQuestionCompleted,
}) {
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [selectedCorrectAnswers, setSelectedCorrectAnswers] = useState([]);

  const isSixAnswers = answers.length === 6;

  const handleAnswerClick = (answer) => {
    const isCorrectAnswer = correctAnswers.includes(answer);

    if (isCorrectAnswer) {
      setSelectedCorrectAnswers((prev) => {
        if (prev.includes(answer)) {
          return prev;
        }

        const updatedCorrectAnswers = [...prev, answer];

        const answeredAllCorrect =
          updatedCorrectAnswers.length === correctAnswers.length;

        if (answeredAllCorrect) {
          onQuestionCompleted?.();
        }

        return updatedCorrectAnswers;
      });

      return;
    }

    setWrongAnswers((prev) => {
      if (prev.includes(answer)) {
        return prev;
      }

      return [...prev, answer];
    });
  };

  return (
    <section className="mcq">
      <div className="mcq__question">{question}</div>

      <div
        className={`mcq__answers ${
          isSixAnswers ? "mcq__answers--six" : "mcq__answers--four"
        }`}
      >
        {answers.map((answer, index) => {
          const isWrong = wrongAnswers.includes(answer);
          const isCorrect = selectedCorrectAnswers.includes(answer);

          return (
            <button
              key={index}
              type="button"
              className={`
                mcq__answer
                ${isWrong ? "mcq__answer--wrong" : ""}
                ${isCorrect ? "mcq__answer--correct" : ""}
              `}
              onClick={() => handleAnswerClick(answer)}
            >
              {answer}
            </button>
          );
        })}
      </div>
    </section>
  );
}