import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  state = {
    allBots: [],
    botArmy: []
  }
  
  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res => res.json())
      .then(bots => this.setState({
        ...this.state,
        allBots: bots
      }))
  }
  
  toggleBot = bot => {
    const tempArmy = this.state.botArmy.slice()
    
    if (this.state.botArmy.includes(bot)) {
      tempArmy.splice(tempArmy.indexOf(bot), 1)
    } else {
      tempArmy.push(bot)
      //should be using spread in setting state not slice. Suboptimal.
    }
    
    this.setState({
      ...this.state,
      botArmy: tempArmy
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy} toggleBot={this.toggleBot}/>
        <BotCollection allBots={this.state.allBots} toggleBot={this.toggleBot}/>
      </div>
    );
  }

}

export default BotsPage;
