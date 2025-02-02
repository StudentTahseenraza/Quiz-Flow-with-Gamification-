import React, { useState, useEffect } from 'react';

const Quiz = ({ onFinish }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch('https://api.jsonserve.com/Uw5CrX')
      .then((response) => response.json())
      .then((data) => setQuestions(data.questions))
      .catch((error) => console.error('Error fetching questions:', error));
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      onFinish(score);
    }
  };

  return (
    <div className="quiz">
      {questions.length > 0 && (
        <>
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option.isCorrect)}>
                {option.text}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;