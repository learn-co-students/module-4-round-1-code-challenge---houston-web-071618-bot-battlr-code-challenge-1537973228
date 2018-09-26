import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
const botUrl = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(props) {
    super(props); 
    this.state = {
      bots: [],
      selectedBot: []
    };
  }
  componentDidMount(){
  fetch(botUrl)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Something went wrong ...');
    }
  })
  .then(bots => this.setState({ bots }))
  
}

  handleSelectedBot = (bot) =>{
   
    this.setState({
      selectedBot: [...this.state.selectedBot, bot] })
    // console.log(this.state.selectedBot)
  }

  handleBotRemoval = (remove)=>{
    var array = [...this.state.selectedBot]; // make a separate copy of the array
    var index = remove
    array.splice(index, 1);
    this.setState({selectedBot: array});
  }


  render() {
    return (
      <div>
        <YourBotArmy selectedBots={this.state.selectedBot} handleBotRemoval={this.handleSelectedBot}/>
        
        <BotCollection bots={this.state.bots}
        selectBotForArmy={this.handleSelectedBot}/>
        
        
      </div>
    );
  }

}

export default BotsPage;
