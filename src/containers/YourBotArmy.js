import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  state = {
    yourBotArmy: []
  };

  // addBotToArmy = bot => {
  //   let selectedBotArmy = [];
  //   selectedBotArmy.push(bot);
  //   this.setState({ yourBotArmy: selectedBotArmy });
  // };

  // <BotCard bots={yourBotArmy} />

  render() {
    const { yourBotArmy } = this.props;
    console.log(yourBotArmy);

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">Your Bot Army</div>
          <BotCard bots={yourBotArmy} />
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
