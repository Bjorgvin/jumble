import React, { Component } from 'react';

class Home extends Component {
  render() {
    const { welcomeText, toggle } = this.props
    return (
      <div>
        <h2 onClick={ () => toggle(welcomeText) }>
          {welcomeText}
        </h2>
      </div>);
  }
}

export default Home
