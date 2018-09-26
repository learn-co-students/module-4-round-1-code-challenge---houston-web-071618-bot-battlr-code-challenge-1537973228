import React from "react";
import BotCollection from "./BotCollection.js";
import BotCard from "../components/BotCard.js"
import YourBotArmy from "./YourBotArmy.js"

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
  	allBots: [],
    isLoading: false,
    armyBots: [],
    selectedBot: {}
  }

	componentDidMount() {
    this.setState({isLoading: true});

		fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
			.then(resp => resp.json())
			.then((data) => {
				this.setState({
					allBots: data,
          isLoading: false
				})
			})
	}
  
    selectedBot = (bot) => {

      if (!this.state.armyBots.includes(bot)) { 
        this.setState({
          armyBots: [...this.state.armyBots, bot]
        })
       } else {
            const newArmy = this.state.armyBots.filter(armyBot => bot !== armyBot)
              this.setState({
              armyBots:newArmy
              })
          }
    }

  render() {
    const {allBots, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <div>
        <YourBotArmy armyBots={this.state.armyBots} selectedBot={this.selectedBot} />
      	<BotCollection allBots={this.state.allBots} selectedBot={this.selectedBot} />
      </div>
    );
  }

}

export default BotsPage;
