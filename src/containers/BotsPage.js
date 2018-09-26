import React from "react";
import BotCollection from "../containers/BotCollection";
import YourBotArmy from "../containers/YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(){
    super ()
    this.state = {
      botList: [],
      selectedBotArmy: null
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

    updateSelectedBotArmy = (bot) => (
      fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots/${bot.id}`)
      .then(resp => resp.json())
      .then(bot => this.setState({
        selectedBotArmy: bot
      }))
  )


  render() {
    return (
      <div>
        <BotCollection botList={this.state.botList} updateSelectedBotArmy = {this.updateSelectedBotArmy}/>
        <YourBotArmy />
      </div>
    );
  }

}

export default BotsPage;
