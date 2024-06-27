import _ from 'lodash';
import './style.css';
import Icon from './image.jpeg';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const myImage = new Image();
  myImage.src = Icon;
  element.appendChild(myImage);

  return element;
}

document.body.appendChild(component());
