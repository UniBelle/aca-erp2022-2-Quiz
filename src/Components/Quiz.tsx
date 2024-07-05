import React, { useState } from 'react';
import Questions from './Questions';
import Summary from './summary'; 
import { questions } from '../Data/questions';
import './Css/Quiz.css';

function Quiz() {
  const [showAllExplanations, setShowAllExplanations] = useState(false);
  const [score, setScore] = useState(0);

  const handleShowExplanations = () => {
    setShowAllExplanations(true);
  };

  const handleQuizComplete = (finalScore: number) => {
    setScore(finalScore);
    handleShowExplanations();
  };

  const handleRestartQuiz = () => {
    // Resetting quiz state
    setShowAllExplanations(false);
    setScore(0);
  };

  return (
    <div className="Quiz-Container">
      {!showAllExplanations ? (
        <Questions onQuizComplete={handleQuizComplete} />
      ) : (
        <div className="explanations-container">
          <div className="score-container">
            <p>Your Score: {score}/{questions.length}</p>
          </div>
          <div className="summary-container">
            <div className="summary-scroll">
              {questions.map((question, index) => (
                <Summary key={question.id} questionNumber={index + 1} explanation={question.explanation} />
              ))}
            </div>
          </div>
          <div className="restart-container">
            <button className="btn-restart" onClick={handleRestartQuiz}>
              Restart Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
