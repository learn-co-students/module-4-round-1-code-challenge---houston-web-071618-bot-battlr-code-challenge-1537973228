import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  // handleClick = (bot) => {
  //   const id = bot.id
  //   const name = bot.name
  //   const health = bot.health
  //   const armor = bot.armor
  //   const bot_class = bot.bot_class
  //   const catchphrase = bot.catchphrase
  //   const avatar = bot.avatar_url

  //   bot.handleSelectBot(id, name, health, armor, bot_class, catchphrase, avatar)}
    
    
  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {this.props.myBotArmy.map(bot => <BotCard handleClick={this.props.handleClick} bot={bot} value={bot.id} />)}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
