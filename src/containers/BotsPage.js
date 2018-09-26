import React from "react";
import BotCollection from "../containers/BotCollection";
import YourBotArmy from "../containers/YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(){
    super ()
    this.state = {
      botList: [],
      botArmy: [],
      selectedBot: null
    }
    this.handleFetch()
  }

  handleFetch= () => {
    fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
    .then(resp => resp.json())
    .then(resp => this.setState({
      botList: resp
    }))
    }

    updateBotArmy = (bot) => {
      if(!this.state.botArmy.includes(bot)){
      this.setState(state => {
        state.botArmy.push(bot)
        return state
      })}
  }

  removeBotFromArmy= (bot) => {
    this.setState(state => {
      state.botArmy = state.botArmy.filter(armyBot => (armyBot !== bot))
      return state
    })
  }

  // this.setState({botArmy: [...this.state.botArmy, bot]})


  render() {
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy} removeBotFromArmy={this.removeBotFromArmy}/>
        <BotCollection botList={this.state.botList} updateBotArmy = {this.updateBotArmy}/>
      </div>
    );
  }

}

export default BotsPage;
