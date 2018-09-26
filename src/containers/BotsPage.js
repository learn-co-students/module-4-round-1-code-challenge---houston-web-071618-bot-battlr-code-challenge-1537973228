import React from "react";
import BotCollection from '../containers/BotCollection'
import YourBotArmy from '../containers/YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    allBots:[],
    myBots:[],
    selectedBot:null,
    loading:true
  }

  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res=> res.json())
    .then(bots => this.setState({allBots:bots, loading:false}))
  }

  setSelectedBot =(bot) =>{
    this.setState({selectedBot:bot})
  }

  recruitBot = (bot) =>{
    const copyBots =[...this.state.myBots, bot]
    this.setState({
      myBots:copyBots
    })
  }


  render() {
    console.log(this.state)
    return (
      <div>
        {this.state.loading ? <h1>Loading</h1> :
          (<div>
           <YourBotArmy myBots={this.state.myBots}/>
           {this.state.selectedBot === null ? null :<BotSpecs bot={this.state.selectedBot} recruitBot={this.recruitBot} setSelectedBot={this.setSelectedBot}/>}
           <BotCollection bots={this.state.allBots} setSelectedBot={this.setSelectedBot}/>
          </div>
      )}
      </div>
    );
  }

}

export default BotsPage;
