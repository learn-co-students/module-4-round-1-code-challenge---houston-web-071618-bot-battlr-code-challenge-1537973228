import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {this.props.ownBots.map(oneBot => <BotCard bot={oneBot} key={oneBot.id}/>)}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
