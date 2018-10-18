import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import axios from "axios";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  state = {
    bots: [],
    yourBotArmy: [],
    selectedBot: null
  };

  componentDidMount() {
    axios
      .get("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(res => this.setState({ bots: res.data }));
  }

  onBotSelect = id => {
    const { bots } = this.state;
    const selectedBot = bots.find(bot => bot.id === id);
    this.setState({ selectedBot });
  };

  returnToHome = () => {
    const { selectedBot } = this.state;
    this.setState({ selectedBot: !selectedBot });
  };

  addBot = selectedBot => {
    const { bots, yourBotArmy } = this.state;

    this.setState({ yourBotArmy: [...yourBotArmy, selectedBot] });
    //Filter out the selected by from bots collection
    const updatedBots = bots.filter(bot => bot.id !== selectedBot.id);
    //Update bots state
    this.setState({ bots: updatedBots });

    this.setState({ selectedBot: !selectedBot });
  };

  removeBotfromArmy = id => {
    const { bots, yourBotArmy } = this.state;

    const selectedBot = yourBotArmy.find(bot => bot.id === id);

    const updatedBotsArmy = yourBotArmy.filter(bot => bot.id !== id);

    this.setState({ yourBotArmy: updatedBotsArmy });

    this.setState({ bots: [...bots, selectedBot] });
  };

  render() {
    const { bots, yourBotArmy, selectedBot } = this.state;

    // if (selectedBot) {
    //   return (

    //   );
    // }

    return (
      <div>
        <YourBotArmy
          yourBotArmy={yourBotArmy}
          removeBot={this.removeBotfromArmy}
        />
        {selectedBot ? (
          <BotSpecs
            bot={selectedBot}
            addBot={this.addBot}
            returnToHome={this.returnToHome}
          />
        ) : (
          <BotCollection bots={bots} onBotSelect={this.onBotSelect} />
        )}
      </div>
    );
  }
}

export default BotsPage;
