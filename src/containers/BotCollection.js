import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render() {
    const { bots, addBot } = this.props;

    return (
      <div className="ui four column grid">
        <div className="row" />
        {bots.map(bot => (
          <BotCard bot={bot} key={bot.id} handleClick={addBot} />
        ))}
      </div>
    );
  }
}

export default BotCollection;
