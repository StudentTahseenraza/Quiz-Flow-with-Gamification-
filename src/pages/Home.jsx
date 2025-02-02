import React, { useState } from 'react';
import Quiz from '../component/Quiz';
import Result from '../component/Result';

const Home = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const finishQuiz = (totalScore) => {
    setQuizFinished(true);
    setScore(totalScore);
  };

  return (
    <div className="home">
      {!quizStarted && !quizFinished && (
        <button onClick={startQuiz}>Start Quiz</button>
      )}
      {quizStarted && !quizFinished && (
        <Quiz onFinish={finishQuiz} />
      )}
      {quizFinished && (
        <Result score={score} />
      )}
    </div>
  );
};

export default Home;