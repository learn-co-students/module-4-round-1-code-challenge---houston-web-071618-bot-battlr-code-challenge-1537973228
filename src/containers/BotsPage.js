import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one

  // note to self: I can render all bots when copying exact code from below into the BotCollection Component - proven.
  // move code back there if all else fails?

  // fetch data to parent. 
  // pass down via props to army and collection?
  // BotSpecs has props?

  constructor(props) {
    super(props);
    this.state = {bots: [], armyBots: []}
  }

  // state = {
  //   bots: [],
  //   armyBots: []
	// }

  // componentDidMount() {
  //   fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
  //   .then(response => response.json())
  //   .then( 
  //     // console.log
  //     // note: fetching works
	// 		data => {
  //     let bots = data.map((bot) => {
  //       return (
  //         <div key={bot.id}>
  //           <img src={bot.avatar_url} alt=""></img>
  //         </div>
  //       )
	// 		})
	// 		this.setState({bots: bots})
	// 	}
	// 	)
	// 	// debugger
  // }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res => res.json())
      .then(bots => this.setState({ bots: bots}))
  }

  enlistBot = (bot) => {
    if(!this.state.armyBots.includes(bot)) {
      return this.setState(state => {
        state.armyBots.push(bot)
        return state
      })
      // else if (includesBot) {
      //   this.setState(state => {
          
      //   })
      //   this.state.armyBots.filter((armyBot) => bot !== armyBot)

      // }
    }
  }

  deleteBot = (bot) => {
    let newBots = [...this.state.armyBots]
    let index = newBots.indexOf(bot);
      if (index > -1) {
    newBots.splice(index, 1);
    }
    this.setState({
      armyBots: newBots
    })
  }

  // this is another way to setState
  // it can take the current object or a function
  // this.setState({armyBots: [...this.state.armyBots, bot]})

  render() {
    return (
      <div>
        <YourBotArmy armyBots={this.state.armyBots} deleteBot={this.deleteBot} />
        <BotCollection bots={this.state.bots} enlistBot={this.enlistBot} />
      </div>
    );
  }
}

export default BotsPage;
