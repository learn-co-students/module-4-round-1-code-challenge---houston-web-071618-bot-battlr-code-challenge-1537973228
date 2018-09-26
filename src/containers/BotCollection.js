import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
    console.log(this.props.bots)

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {this.props.bots.map(bot => {
            // console.log(bot)
            return <BotCard bot={bot} key={bot.id} addtoArmy={this.props.addtoArmy} />
          })}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
