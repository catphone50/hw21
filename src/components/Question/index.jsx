import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { answerQuestion } from "../../redux/slices/questionnaireSlice";

const Question = ({ question }) => {
  const dispatch = useDispatch();
  // const answer = useSelector((state) => state.questionnaire.answers);

  const handleAnswer = (answer) => {
    dispatch(answerQuestion({ questionId: question.id, answer }));
  };

  return (
    <div>
      <h2>{question.text}</h2>
      <ul>
        {question.options.map((option, index) => (
          <li key={index}>
            <input
              type="radio"
              name={question.id}
              value={option}
              onChange={() => handleAnswer(option)}
            />
            <span>{option}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
