import _ from 'lodash'
import './test1.css'
import printMe from './print.js'

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    const btn = document.createElement('button');
    btn.innerText = 'click'         
    console.log(3);
    btn.onclick = printMe;
    element.appendChild(btn)
    return element
}

document.body.appendChild(component())
