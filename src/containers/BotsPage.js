import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    allTheBots: [],
    selectedBotId: null,
    selectedBots: [],
    removetheBot: false
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(r => r.json())
      .then(data => this.setState({
        allTheBots: data
      }))
  }

  handleClick = (e) => {
    let bots = this.state.allTheBots
    let myArray = [...this.state.selectedBots, bots[e.target.id-1]]
    let selectedBotsss = [...new Set(myArray)]
    let selectedOrNot = this.state.selectedBoolean
    this.setState({
      selectedBotId: e.target.id,
      selectedBots: selectedBotsss
    }, () => console.log(this.state))
  }

  removeBotFromArmy = (e) => {
    console.log("find the bot to remove from selectedBots, then take it out of the array in state");
    // find the bot to remove from selectedBots, then take it out of the array in state
  }



  render() {
    return (
      <div>
        {<YourBotArmy selectedBots={this.state.selectedBots} removeBotFromArmy={this.removeBotFromArmy} />}
        {<BotCollection allTheBots={this.state.allTheBots} handleClick={this.handleClick} />}
      </div>
    );
  }

}

export default BotsPage;
