'use strict';

const PATTERNS = [
  {
    type: 'multiple-choice',
    regex: /\((x| )\) (.*)\n/,
    isAnswer: token => token === 'x'
  }
];

const TITLE_REGEX = /^#+(.*)$/;

module.exports = (text) => kuizify(text, chunkify(text));

const chunkify = (text) => {
  const chunks = [
    {
      start: 0,
      end: text.length
    }
  ];

  let chunk = chunks[0];

  while(chunk) {
    const chunkText = getChunkText(text, chunk);
    const item = chunkText.match(PATTERNS[0].regex);
    console.log(item);

    if (item) {
      const answerChunk = {
        start: chunk.start + item.index,
        end: chunk.start + item.index + item[0].length,
        type: 'answer',
        data: {
          type: 'multiple-choice',
          isCorrect: PATTERNS[0].isAnswer(item[1]),
          text: item[2]
        }
      };

      chunks.push(answerChunk);

      const newChunk = {
        start: answerChunk.end,
        end: chunk.end
      };

      chunks.push(newChunk);

      chunk.end = chunk.start + item.index;
      chunk = newChunk;
    } else {
      chunk = null;
      break;
    }
  }

  console.log('chunks', chunks);

  return chunks;
};


const kuizify = (inputText, chunks) => {
  const elements = [];
  let currentQuestion = null;

  for (let i=0; i<chunks.length; i++) {
    const chunk = chunks[i];

    // Wipe empty chunks
    if (chunk.start == chunk.end) {
      continue;
    }

    if (chunk.type && chunk.type == 'answer') {
      const newAnswer = {
        isCorrect: chunk.data.isCorrect,
        text: chunk.data.text,
        type: chunk.data.type
      };

      if (!currentQuestion || chunk.data.type !== currentQuestion.data.answers[0].type) {
        currentQuestion = {
          type: 'question',
          data: {
            type: chunk.data.type,
            answers: [newAnswer]
          }
        };
      } else {
        currentQuestion.data.answers.push(newAnswer);
      }
    } else {
      // Save the question && reset the currentQuestion
      if (currentQuestion) {
        elements.push(currentQuestion);
        currentQuestion = null;
      }

      elements.push({
        type: 'text',
        data: {
          text: getChunkText(inputText, chunk)
        }
      });
    }
  }

  if (currentQuestion) {
    elements.push(currentQuestion);
  }

  return elements;
};

const getChunkText = (text, chunk) => text.substring(chunk.start, chunk.end);
