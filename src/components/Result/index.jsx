import React from "react";
import { useSelector } from "react-redux";

const Result = () => {
  const result = useSelector((state) => state.questionnaire.result);

  return (
    <div>
      <h2>Результат:</h2>
      <p>{result}</p>
    </div>
  );
};

export default Result;
