import React from "react";
import BotCollection from "./BotCollection"

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor() {
    super()
    this.state = {
      bots: [],
      loaded: false,
      botsOnPage: []
    }

  }

  putOnPage = (bot) => {
    console.log(bot)
    this.setState({
      botsOnPage: [...this.state.botsOnPage, bot]
    })
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(resp => resp.json())
      .then(data => {
        const x = data.map(bot => {
          return {
            id: bot.id ,
            name: bot.name,
            health: bot.health,
            damage: bot.damage,
            armor: bot.armor,
            botClass: bot.bot_class,
            catchphrase: bot.catchphrase,
            url: bot.avatar_url
          }
        })
        this.setState({
          bots: x,
          loaded: true
        })
      })
  }


  render() {
    if (!this.state.loaded) return (<div>Loading...</div>)
    return (
      <div>
        <BotCollection bots={this.state.bots} putOnPage={this.putOnPage}/>
      </div>
    );
  }

}

export default BotsPage;
