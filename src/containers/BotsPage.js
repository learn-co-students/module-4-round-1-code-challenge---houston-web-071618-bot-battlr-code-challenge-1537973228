import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor() {
    super();

    this.state = {
      allBots: [],
      enlistedBots: []
    };
  }

  toggleBotClick = bot => {
    this.state.enlistedBots.includes(bot)
      ? this.removeBot(bot)
      : this.addBot(bot);
  };

  removeBot(rBot) {
    this.setState({
      enlistedBots: this.state.enlistedBots.filter(bot => bot.id !== rBot.id)
    });
  }

  addBot(bot) {
    this.setState({ enlistedBots: [...this.state.enlistedBots, bot] });
  }

  componentDidMount = () => {
    this.fetchBots();
  };

  fetchBots() {
    fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
      .then(res => res.json())
      .then(bots => this.setState({ allBots: bots }));
  }

  render() {
    return (
      <div>
        <YourBotArmy
          enlistedBots={this.state.enlistedBots}
          toggleBotClick={this.toggleBotClick}
        />
        <BotCollection
          bots={this.state.allBots}
          toggleBotClick={this.toggleBotClick}
        />
      </div>
    );
  }
}

export default BotsPage;
