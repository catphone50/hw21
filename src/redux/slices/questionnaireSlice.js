import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [
    {
      id: 1,
      text: "Что можно найти в конце радуги?",
      options: ["Золото", "Вода", "Буква “и”", "Единорог"],
      correctAnswer: "Буква “и”",
    },
    {
      id: 2,
      text: "Какой месяц имеет 28 дней?",
      options: ["Январь", "Февраль", "Март", "Все месяцы"],
      correctAnswer: "Все месяцы",
    },
    {
      id: 3,
      text: "ЧЧто можно увидеть с закрытыми глазами?",
      options: ["Сны", "Темноту", "Свет", "Музыку"],
      correctAnswer: "Сны",
    },
    {
      id: 4,
      text: "Какой ключ не открывает двери?",
      options: ["Домашний", "Автомобильный", "Музыкальный", "Секретный"],
      correctAnswer: "Музыкальный",
    },
    {
      id: 5,
      text: "Что можно держать, но нельзя потрогать?",
      options: ["Воду", "Воздух", "Тень", "Обещание"],
      correctAnswer: "Обещание",
    },
  ],
  answers: [],
  result: null,
};

const calculateResult = (answers) => {
  const correctAnswers = initialState.questions.filter((question) => {
    return question.correctAnswer === answers[question.id];
  }).length;

  return correctAnswers;
};

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      state.answers[action.payload.questionId] = action.payload.answer;
    },
    submitAnswers: (state) => {
      state.result = `Вы правильно ответили на ${calculateResult(
        state.answers
      )} вопросов из ${initialState.questions.length}`;
    },
  },
});

export const { answerQuestion, submitAnswers } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
