import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Question from "./components/Question";
import Result from "./components/Result";
import { submitAnswers } from "./redux/slices/questionnaireSlice";

function App() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questionnaire.questions);

  const handleSubmit = () => {
    dispatch(submitAnswers());
  };

  return (
    <div>
      <h1>Анкета</h1>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <Question question={question} />
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Отправить ответы</button>
      <Result />
    </div>
  );
}

export default App;
