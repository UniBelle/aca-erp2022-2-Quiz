import React, { useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Question, questions } from '../Data/questions';
import './Css/Questions.css';

interface QuestionsProps {
  onQuizComplete: (finalScore: number) => void;
}

function Questions({ onQuizComplete }: QuestionsProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [optionSelected, setOptionSelected] = useState<number>(-1);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleNextQuestion = () => {
    setOptionSelected(-1); // Reset selected option
    setShowExplanation(false); // Hide explanation
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onQuizComplete(score); // Notify parent component when quiz is complete
    }
  };

  const handleAnswerOption = (index: number) => {
    const currentQuestionObj: Question = questions[currentQuestion];
    
    if (index === currentQuestionObj.correctAnswerIndex) {
      setScore(score + 1);
    }
    setOptionSelected(index); // Track which option was selected
    setShowExplanation(true); // Show explanation for the current question
  };

  return (
    <div className="questions-container">
      <div className="question-content">
        <p className="question-number">Question {currentQuestion + 1}</p>
        <p className="question-text">{questions[currentQuestion].questionText}</p>
        <div className="options">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className={`option ${optionSelected !== -1 && index === questions[currentQuestion].correctAnswerIndex ? 'correct' : optionSelected === index ? 'incorrect' : ''}`}
              disabled={optionSelected !== -1}
              onClick={() => handleAnswerOption(index)}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="btn btn-next">
          <button onClick={handleNextQuestion} disabled={optionSelected === -1}>
            Next <FaAngleDoubleRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Questions;
