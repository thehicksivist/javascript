import React from 'react';

class LoggingButton extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        caption: "Click Me!"
      }
    }
  
    handleClick = () => {
      console.log('this is:', this)
      this.setState({caption: 'Do not click this button'})
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.caption}
        </button>
      )
    }
  }

export default LoggingButton