import React from "react";
import BotCollection from './BotCollection'

class BotsPage extends React.Component {
  //start here with your code for step one
 state = {
   isBotsLoaded: true,
   bots: [],
   isBotsClicked: false
 }

  componentDidMount(){
    fetch(` https://bot-battler-api.herokuapp.com/api/v1/bots`)
      .then(resp => resp.json())
      .then(bots => this.setState({bots, isBotsLoaded: false}))
  }

  handleBotClick = (event) =>{
    //pass this to BotCollection as callback
    console.log('handleBotClick')
  }


  getBots = () => {
    return this.state.bots.map((bot) => {
      console.log(bot)
      return <BotCollection key={bot.id} id={bot.id} {...bot} handleBotClick={this.handleBotClick}/>
    })
  }

  render() {
    return (
      <div>
        {this.getBots()}
      </div>
    );
  }

}

export default BotsPage;
