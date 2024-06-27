import _ from 'lodash';
import './style.css';
import printMe from './print.js';

function component() {
  const btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
