import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  state = {
    showSpecToggle: false
  };

  render() {
    const { showSpecToggle } = this.state;
    const { bots, onBotSelect } = this.props;

    return (
      <div className="ui four column grid">
        <div className="row" />
        {bots.map(bot => (
          <BotCard bot={bot} key={bot.id} handleClick={onBotSelect} />
        ))}
      </div>
    );
  }
}

export default BotCollection;
