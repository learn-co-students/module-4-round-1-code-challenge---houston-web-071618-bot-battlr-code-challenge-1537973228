import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here


  renderBots = () => (
    this.props.botList.map(bot => (
      <BotCard bot={bot} key={bot.id}
      updateSelectedBotArmy = {this.props.updateSelectedBotArmy} />
    ))
  )

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
        {this.renderBots()}
    		 Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
