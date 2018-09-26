import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.allBots.map(oneBot => { return <BotCard key={oneBot.id} bot={oneBot}  showBotSpec={this.props.showBotSpec}/>})}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
