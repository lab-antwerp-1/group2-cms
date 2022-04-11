import { data } from '../data.js';

export const initializeApp = () => {
  // initialize your UI

  document.getElementById('root').innerHTML = data.greeting;
};
