import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  render(){
			const generateBot = bot => (
				<BotCard key={bot.id} bot={bot} handleClick={this.props.handleClick}/>
			)
			const botComponents = this.props.bots.map(generateBot)
		
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
					{botComponents}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
