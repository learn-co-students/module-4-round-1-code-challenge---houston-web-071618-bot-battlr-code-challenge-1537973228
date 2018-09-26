import React from "react";
import BotCard from "../components/BotCard";
import BotsPage from "./BotsPage.js"

class BotCollection extends React.Component {
  //your code here
  constructor(props) {
    super(props);
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {this.props.allBots.map((bot) =>  {
            return <BotCard key={bot.id} bot={bot} selectedBot={this.props.selectedBot} />
          })}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }
};

export default BotCollection;
