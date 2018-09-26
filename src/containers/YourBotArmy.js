import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.myArmy.length === 0 ? "Empty Army" : this.props.myArmy.map(bot => <BotCard handleClick={this.props.handleClick} bot={bot} key={bot.id} />)}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
