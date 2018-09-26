import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.armyBots.map((bot) =>  {
            return <BotCard key={bot.id} bot={bot} selectedBot={this.props.selectedBot} />
          })}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
