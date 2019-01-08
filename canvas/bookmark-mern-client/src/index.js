import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {
    Route,
    Switch,
    BrowserRouter as Router
} from 'react-router-dom'
import App from './components/App'
import Nav from './components/Nav'
import Contact from './components/Contact'
import Bookmarks from './components/Bookmarks'
import Notfound from './components/Notfound'
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
      <div>
        <Nav />
        <Switch>
            <Route exact path="/bookmarks" component={Bookmarks} />
            <Route path="/bookmarks/:id" component={Bookmarks} />
            <Route exact path="/" component={App} />
            <Route path="/contact" component={Contact} />
            <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
