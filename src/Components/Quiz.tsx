import React, { useState } from 'react';
import Questions from './Questions';
import Summary from './summary'; 
import { questions } from '../Data/questions';
import './Css/Quiz.css';

function Quiz() {
  const [showAllExplanations, setShowAllExplanations] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
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
    setShowWelcome(true);
    setScore(0);
  };
  const handleStartQuiz = () => {
    setShowWelcome(false);
  };

  return (
    <div>
      {showWelcome ? (
        <div className="welcome-container">
          <h1>Welcome to ACA Quiz</h1>
          <ol className="instructions">
            <li>Read each question carefully.</li>
            <li>Select the best answer from the choices provided.</li>
            <li>You cannot change your answer once submitted.</li>
            <li>Your score will be shown at the end of the quiz.</li>
          </ol>
          <p className="goodluck">
            Good luck
          </p>
          <button className="btn-start" onClick={handleStartQuiz}>
            Start Quiz
          </button>
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default Quiz;
