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

  state = {
    bots: [],
    isAdded: false
	}

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(response => response.json())
    .then( 
      // console.log
      // note: fetching works
			data => {
      let bots = data.map((bot) => {
        return (
          <div key={bot.id}>
            <img src={bot.avatar_url} alt=""></img>
          </div>
        )
			})
			this.setState({bots: bots})
		}
		)
		// debugger
  }

  render() {
    return (
      <div>
        <YourBotArmy />
        <BotCollection bots={this.state.bots}/>
      </div>
    );
  }

}

export default BotsPage;
