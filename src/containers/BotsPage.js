import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    army: []
  }

  componentDidMount = () => {
    this.getBots()
  }

  getBots = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(resp => resp.json())
      .then(bots => this.setState({ bots: bots }))
  }

  addBotToArmy = (bot) => {
    if (!this.state.army.includes(bot)) {
      this.setState(state => {
        state.army.push(bot)
        return state
      })
    }
  }

  removeFromArmy = (bot) => {
    let index = this.state.army.indexOf(bot)
    this.setState(state => {
      if (index > -1) {
        state.army.splice(index, 1);
      }
      return state
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy army={this.state.army} removeFromArmy={this.removeFromArmy} />
        <BotCollection bots={this.state.bots} addBotToArmy={this.addBotToArmy} />

        {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage;
