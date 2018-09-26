import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row" onClick={(e) => this.props.handleBotClick}>
    		 {this.props.name}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
