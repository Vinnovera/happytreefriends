import React, { Component } from 'react';
import BotModel from './models/Bot';
import Bot from './components/Bot';

export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      bots: [
        new BotModel('Alice'),
        new BotModel('Boer'),
        new BotModel('Charlie')
      ]
    }

    console.log(this.state.bots);
  }

  handleAddBot() {
    this.setState({
      bots: [
        ...this.state.bots,
        new BotModel('moo')
      ]
    });
  }

  handleUpdateBots() {
    this.state.bots.forEach((bot) => {
      bot.update();
    });
    this.setState({
      bots: [
        ...this.state.bots,
      ]
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world bots!</h1>
        {this.state.bots.map((bot) =>
          <Bot bot={bot}/>
        )}
        <button onClick={this.handleAddBot.bind(this)}>Add bot</button>
        <button onClick={this.handleUpdateBots.bind(this)}>Update bots</button>
      </div>
    );
  }
}
