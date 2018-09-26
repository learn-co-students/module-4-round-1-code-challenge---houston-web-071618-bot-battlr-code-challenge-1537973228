import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here


  displayTheBots = () => {
    return this.props.allTheBots.map(bot => {
      return <BotCard key={bot.id} details={bot} handleClick={this.props.handleClick} selectedBot={this.props.selectedBot} />
    })
  }



  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/* {<BotCard />} */}
          {this.displayTheBots()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
