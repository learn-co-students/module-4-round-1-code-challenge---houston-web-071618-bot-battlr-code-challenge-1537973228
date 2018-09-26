import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  renderBotCard = () => {
		return this.props.bots.map((bot) => {
			return <BotCard bot={bot} selectBot={this.props.selectBotForArmy}/>
		} )
	}

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderBotCard()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
