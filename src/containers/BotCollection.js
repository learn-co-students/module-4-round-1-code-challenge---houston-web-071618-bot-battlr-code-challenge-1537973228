import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  getBots = () => {
    return this.props.bots.map(bot => {
     return <BotCard bots={this.props.bot}  />
    })
  }

  render(){
    return (
  	  <div className="ui four column grid">
    		<div className="row">
        Collection of all bots
    		{this.getBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
