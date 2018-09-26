import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(response => response.json())
    .then(
			// console.log;
			bots => {
      bots.map((bot) => {
        return (
          <div key={bot.id}>
            <img src={bot.avatar_url} alt=""></img>
          </div>
        )
      })
		}
		)
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
					{this.bots}
    		  {/*...and here..*/}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
