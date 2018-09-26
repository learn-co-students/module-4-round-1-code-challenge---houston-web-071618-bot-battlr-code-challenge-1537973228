import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  constructor() {
    super()

    this.state = {
      allBots: [],
      ownBots: [],
      selectedBot: null,
      botCardClicked: false
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
    this.returnToList()
  }

  returnToList = () => {
    this.setState({selectedBot: null})
    this.setState({botCardClicked: false})
  }

  showBotSpec = id => {
    const selectedBot = this.state.allBots.filter(oneBot => oneBot.id === id)

    this.setState({selectedBot: selectedBot})
    this.setState({botCardClicked: true})
  }

  render() {
    return (
      <div>
        {this.state.ownBots !== undefined ? <YourBotArmy ownBots={this.state.ownBots}/> : <div>Waiting for your enlisted Bots...</div>}
        {this.state.allBots !== [] && this.state.botCardClicked === false ? <BotCollection allBots={this.state.allBots} showBotSpec={this.showBotSpec}/> : <div>Loading...</div>}
        {this.state.allBots !== [] && this.state.botCardClicked === true && this.state.selectedBot !== null ? <div><BotSpecs bot={this.state.selectedBot} enlistBot={this.enlistBot} returnToList={this.returnToList}/></div> : <p>bot card NOT clicked</p>}
      </div>
    );
  }

}

export default BotsPage;
