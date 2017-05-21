# Kuiz.md NPM module

You can use the kuiz NPM module to generate your own kuiz from Markdown you provide.

```bash
npm install kuiz-md
```

Or, if you use yarn:
```bash
yarn add kuiz-md
```

## Usage

```javascript
const app = require('kuiz-md');

const markdown = '# your *Markdown* text _here_';
const yourCallback = (data) => {
  alert('User ' + data.email + ' had grade ' + data.grade);
};

app.init(markdown, yourCallback);
```

## Special notation

There is a special notation for handling the Kuiz possible responses:

**Multiple possible answers**

The user must validate all possible answers, identifed with a "x" inside the parenthesis:
```
random text

( ) answer not valid
(x) answer valid
(x) answer valid
( ) answer not valid
```

Other answer types: WIP
