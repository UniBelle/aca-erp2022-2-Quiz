import React from 'react';

interface SummaryProps {
  questionNumber: number;
  explanation: string;
}

const Summary: React.FC<SummaryProps> = ({ questionNumber, explanation }) => {
  return (
    <div className="summary-item">
      <p className="question-number">Question {questionNumber}</p>
      <p className="explanation">{explanation}</p>
    </div>
  );
}

export default Summary;
