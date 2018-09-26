import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import axios from "axios";

class BotsPage extends React.Component {
  state = {
    bots: [],
    yourBotArmy: null
  };

  componentDidMount() {
    axios
      .get("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(res => this.setState({ bots: res.data }));
  }

  addBot = id => {
    const { bots, yourBotArmy } = this.state;
    let selectedBot = bots.find(bot => bot.id === id);

    // Find bot using ID.

    // Store selected bot to yourBotArmy
    this.setState({ yourBotArmy: selectedBot });
    //Filter out the selected by from bots collection
    const updatedBots = bots.filter(bot => bot.id !== id);
    //Update bots state
    this.setState({ bots: updatedBots });
  };

  render() {
    const { bots, yourBotArmy } = this.state;
    return (
      <div>
        <BotCollection bots={bots} addBot={this.addBot} />
        {yourBotArmy ? (
          <YourBotArmy yourBotArmy={yourBotArmy} />
        ) : (
          <p>loading</p>
        )}
      </div>
    );
  }
}

export default BotsPage;
