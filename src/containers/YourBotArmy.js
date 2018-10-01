import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  addArmyBot = () => {
    return this.props.armyBots.map((armyBot) => {
       return <BotCard bot={armyBot} enlistBot={this.props.deleteBot}/>
    })
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.addArmyBot()}
            YOUR BOT ARMY
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
