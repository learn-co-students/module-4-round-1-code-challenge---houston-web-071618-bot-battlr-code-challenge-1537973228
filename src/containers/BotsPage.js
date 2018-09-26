import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(){
    super();
    this.state= {
      allBots: [],
      currentBot: {
        id: "id",
        name: "name",
        health: "health",
        damage: "damage",
        bot_class: "bot_class",
        catchphrase: "catchphrase",
        image: "avatar_url"
      },
      // armyCollection: [],
      loaded: false

    }
  }
  // "id": 1,
  // "name": "bvt-99",
  // "health": 92,
  // "damage": 25,
  // "armor": 74,
  // "bot_class": "Support",
  // "catchphrase": "111011001111110111100111101111000",
  // "avatar_url": "https://robohash.org/iustodoloremrerum.png?size=300x300&set=set1",


  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(resp =>resp.json())
      .then(allBots =>
        this.setState({
          allBots: allBots
          // ,
          // currentBot: {
          //   id: robot[0].id,
          //   name: robot[0].name,
          //   health: robot[0].health,
          //   damage: robot[0].damage,
          //   bot_class: robot[0].bot_class,
          //   catchphrase: robot[0].Catchphrase,
          //   image: robot[0].avatar_url
          // },
          // loaded: true
        })

        );


  }


  render() {
    console.log("BotPage ", this.state.allBots, this.state.currentBot, this.state.loaded)
    return (
      <div>

        <YourBotArmy />
        <BotCollection
          allBots={this.state.allBots}
          currentBot={this.state.currentBot}
        />
      </div>
    );
  }

}

export default BotsPage;
