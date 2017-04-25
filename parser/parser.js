'use strict';

const PATTERNS = [
  {
    type: 'multiple-choice',
    regex: /^\((x| )\) (.*)$/,
    isAnswer: token => token === 'x'
  }
];

const TITLE_REGEX = /^#+(.*)$/;

module.exports = (markdownLines) => {
  const elements = [];
  let currentQuestion = null;
  let lastTitle = null;
  let currentText = '';

  markdownLines.forEach((line, index) => {
    let hasMatched = false;

    PATTERNS.forEach(pattern => {
      const matches = line.match(pattern.regex);

      if (matches) {
        hasMatched = true;

        if (currentText.length > 0) {
          elements.push({
            type: 'text',
            data: {
              line: currentText
            }
          });
          currentText = '';
        }

        const newAnswer = {
          isCorrect: pattern.isAnswer(matches[1]),
          text: matches[2]
        };

        if (currentQuestion) {
          currentQuestion.data.answers.push(newAnswer);
        } else {
          currentQuestion = {
            type: 'question',
            data: {
              type: pattern.type,
              title: lastTitle,
              answers: [newAnswer]
            }
          };
          elements.push(currentQuestion);
        }
      }
    });

    if (!hasMatched) {
      currentQuestion = null;

      // Title check
      const matches = line.match(TITLE_REGEX);
      if (matches) {
        lastTitle = matches[1];

        if (currentText.length > 0) {
          elements.push({
            type: 'text',
            data: {
              line: currentText
            }
          });

          currentText = '';
        }

        elements.push({
          type: 'text',
          data: {
            line
          }
        });
      } else {
        // It's Text, group it
        currentText += currentText.length > 0 ? '\n ' : '';
        currentText += line
      }
    }
  });

  console.log(JSON.stringify(elements));
};
