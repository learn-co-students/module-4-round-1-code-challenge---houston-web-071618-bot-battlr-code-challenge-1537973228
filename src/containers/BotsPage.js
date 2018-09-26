import React from "react";
import BotCollecion from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: []
  }

  componentDidMount() {

    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(resp => resp.json())
      .then(bots => {
          this.setState({ bots:bots })
      })
  }


  render() {
    return (
      <div>
        <YourBotArmy />
        <BotCollecion bots={this.state.bots}/>
      </div>
    );
  }

}

export default BotsPage;



