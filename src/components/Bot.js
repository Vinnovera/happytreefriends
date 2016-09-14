import React, { Component } from 'react';

export default class Bot extends Component {

  constructor (props){
    super(props);

    this.state = {
      bot: this.props.bot
    }
  }

  render() {
    const attributes = [];
    for (let key in this.state.bot.attributes) {
      attributes.push(<li>{key}: {this.state.bot.attributes[key]}</li>);
    }
    return (
      <article className="bot">
        {this.state.bot.name}
        <ul>{attributes}</ul>
      </article>
    );
  }
}
