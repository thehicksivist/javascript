import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoggingButton from './LoggingButton.jsx';
import App from './App';
import * as serviceWorker from './serviceWorker';

function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>
  }

class Clock extends React.Component {
    constructor(props) {
      super(props)
      this.state = {date: new Date()}
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
          )
    }
  
    componentWillUnmount() {
        clearInterval(this.timerID)
    }
  
    tick() {
        this.setState({
          date: new Date()
        })
      }

    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <FormattedDate date={this.state.date} />
        </div>
      )
    }
  }
  
  ReactDOM.render(
    <LoggingButton />,
    document.getElementById('root')
  )

function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    )
    ReactDOM.render(
      element,
      document.getElementById('root')
    )
  }
  

//   ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();