import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

let element = React.createElement('h1', {style: {color: 'red'}},
      React.createElement('ul', {},
        React.createElement('li', {}, "Item 1"),
        React.createElement('li', {}, "Item 2"),
        React.createElement('li', {}, "Item 3")
      )
    )

ReactDOM.render(element, document.getElementById('root'))

