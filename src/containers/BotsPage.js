import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor() {
    super();

    this.state = {
      allBots: [],
      enlistedBots: [],
      currentBot: null,
      isInArmy: false
    };
  }

  toggleBotClick = (bot = this.state.currentBot) => {
    this.state.enlistedBots.includes(bot)
      ? this.removeBot(bot)
      : this.addBot(bot);
    this.goBack();
  };

  removeBot(rBot) {
    this.setState({
      enlistedBots: this.state.enlistedBots.filter(bot => bot.id !== rBot.id)
    });
  }

  addBot(bot) {
    this.setState({
      enlistedBots: [...this.state.enlistedBots, bot]
    });
  }

  componentDidMount = () => {
    this.fetchBots();
  };

  fetchBots() {
    fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
      .then(res => res.json())
      .then(bots => this.setState({ allBots: bots }));
  }

  showBot = bot => {
    const isInArmy = this.state.enlistedBots.includes(bot) ? true : false;
    this.setState({ currentBot: bot, isInArmy });
  };

  goBack = () => {
    this.setState({ currentBot: null });
  };

  render() {
    const { currentBot } = this.state;
    if (currentBot) {
      return (
        <BotSpecs
          bot={currentBot}
          toggleBotClick={this.toggleBotClick}
          goBack={this.goBack}
          isInArmy={this.state.isInArmy}
        />
      );
    }

    return (
      <div>
        <YourBotArmy
          enlistedBots={this.state.enlistedBots}
          toggleBotClick={this.toggleBotClick}
        />
        <BotCollection
          bots={this.state.allBots}
          toggleBotClick={this.showBot}
        />
      </div>
    );
  }
}

export default BotsPage;
