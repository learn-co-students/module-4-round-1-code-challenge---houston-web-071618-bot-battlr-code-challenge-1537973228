import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
	state = {
    bots: [],
    selectedBots: null,
    myBotArmy: []
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
        .then(res => res.json())
        .then(data => this.setState(
          {bots: data}
				))
  }

  // handleSelectBot = (id, name, health, armor, bot_class, catchphrase, avatar) => {
  //   this.setState({
  //     selectedBots: {id, name, health, armor, bot_class, catchphrase, avatar }
  //   })
  // }

  handleClick = (key) => {
    const myBot = this.state.bots.filter( bot => 
      bot.id === key)
		const myBotArmy = [...this.state.myBotArmy, myBot[0]]
		this.setState({
			selectedBots: myBot,
			myBotArmy: myBotArmy
		})
	}



  render() {
    return (
      <div>
        <YourBotArmy handleClick={this.handleClick} myBotArmy={this.state.myBotArmy} />
        <BotCollection handleClick={this.handleClick} bots={this.state.bots} selectedBots={this.state.selectedBots}/>
      </div>
    );
  }

}

export default BotsPage;
