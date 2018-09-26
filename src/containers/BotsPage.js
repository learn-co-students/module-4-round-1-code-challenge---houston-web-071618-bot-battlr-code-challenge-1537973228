import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'


class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    added: []
  }

 addtoArmy = (id) => {
   console.log(id)
    if (this.state.bots.find(bot => bot.id === id)) {
    this.setState({
      added: id
    }, ()=>console.log(this.state))
   }
  }

  componentDidMount = () =>{
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(results => results.json())
    .then((data) => {
        this.setState({
          bots: data
        })
    })
  }

  // passing the function down to Bot Collection parent giving permission to change state in toggle card
  // this then gets passed to its child Bot BotCard
  // BotCard invokes the function

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.bots} addtoArmy={this.state.added}/>
        <BotCollection bots={this.state.bots} addtoArmy={this.addtoArmy} />
      </div>
    );
  }

}

export default BotsPage;
