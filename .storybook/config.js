import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);


// .storybook/config.js

// import {
//   configure
// } from '@storybook/react';
// import '../src/index.css';

// const req = require.context('../src', true, /\.stories.js$/);

// function loadStories() {
//   req.keys().forEach(filename => req(filename));
// }

// configure(loadStories, module);
