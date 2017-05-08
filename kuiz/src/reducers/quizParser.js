'use strict';

module.exports = (state, quizz) => {
  let questionCount = 0;
  let answerCount = 0;
  let rawCount = 0;

  // Normalizes the state
  quizz.forEach(element => {
    if (element.type === 'question') {
      const question = element.data;
      question.id = questionCount;

      question.answers.forEach((answer) => {
        answer.id = answerCount;
        answer.selected = false;
        answer.questionId = question.id;
        state.answers.byId[answer.id] = answer;
        state.answers.allIds.push(answer.id);
        answerCount++;
      });

      delete question.answers;

      state.questions.byId[question.id] = question;
      state.questions.allIds.push(question.id);
      state.elements.push({
        id: question.id,
        type: 'questions'
      });
      questionCount++;
    } else {
      const raw = element.data;
      raw.id = rawCount;
      state.raw.byId[raw.id] = raw;
      state.raw.allIds.push(raw.id);
      state.elements.push({
        id: raw.id,
        type: 'raw'
      });
      rawCount++;
    }
  });
}

