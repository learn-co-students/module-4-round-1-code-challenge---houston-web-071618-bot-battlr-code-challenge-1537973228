import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  // addBotToArmy = bot => {
  //   let selectedBotArmy = [];
  //   selectedBotArmy.push(bot);
  //   this.setState({ yourBotArmy: selectedBotArmy });
  // };

  // <BotCard bots={yourBotArmy} />

  render() {
    const { yourBotArmy, removeBot } = this.props;

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">Your Bot Army</div>
          {yourBotArmy.map(bot => (
            <BotCard bot={bot} key={bot.id} handleClick={removeBot} />
          ))}
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
