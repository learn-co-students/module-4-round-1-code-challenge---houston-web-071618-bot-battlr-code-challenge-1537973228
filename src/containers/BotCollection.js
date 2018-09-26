import React from "react";
// import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  const

  render(){
  console.log("BotCollection:", this.props.allBots, this.props.currentBot)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/* <BotCard bot={this.props.allBots.map(bot => <BotCard )}/> */}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
