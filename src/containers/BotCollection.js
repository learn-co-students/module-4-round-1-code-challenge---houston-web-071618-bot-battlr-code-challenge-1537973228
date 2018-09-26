import React from "react";
import BotCard from "../components/BotCard";


class BotCollection extends React.Component {
  //your code here

  render(){
    console.log(this.props)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		 
          {this.props.allBots.length === 0 ? "Loading" : this.props.allBots.map(bot => <BotCard handleClick={this.props.handleClick} bot={bot} key={bot.id} />)}

    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
