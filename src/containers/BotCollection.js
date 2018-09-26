import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.allBots.map(oneBot => { return <BotCard key={oneBot.id} bot={oneBot} enlistBot={this.props.enlistBot}/>})}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
