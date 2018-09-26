import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	//your code here
	
	// selectBot = (botID) => {
	// 	this.setState(state => {
	// 		let selected = {this.props.bot.id == botID}
	// 	}
	// 	bot.selected: selected
	// 	return state
	// }

  render(){
		const bots = this.props.bots
		//console.log(bots)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
					{bots.map(bot => {
						//console.log(bot)
						return (
							<div>
								<BotCard bot={bot} key={bot.id} onSelectBot={this.props.onSelectBot}/>
							</div>
						)	
					})}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;