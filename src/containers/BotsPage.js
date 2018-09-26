import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  constructor() {
    super()

    this.state = {
      allBots: [],
      ownBots: [],
      selectedBot: null
    }

    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(resp => resp.json())
      .then(resp => this.setState({allBots: resp}))
  }

  enlistBot = id => {
    const selectedBot = this.state.allBots.filter(oneBot => oneBot.id === id)
    const updatedAllBots = this.state.allBots.filter(oneBot => oneBot.id !== id)
    const updatedOwnBots = this.state.ownBots.concat(selectedBot)
    this.setState({ownBots: updatedOwnBots})
    this.setState({allBots: updatedAllBots})
  }

  render() {
    return (
      <div>
        {this.state.ownBots !== undefined ? <YourBotArmy ownBots={this.state.ownBots}/> : <div>Waiting for your enlisted Bots...</div>}
        {this.state.allBots !== [] ? <BotCollection allBots={this.state.allBots} enlistBot={this.enlistBot}/> : <div>Loading...</div>}
      </div>
    );
  }

}

export default BotsPage;
