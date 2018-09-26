import React from "react";
import BotCard from "../components/BotCard"

class BotCollection extends React.Component {
  //your code here
  render(){
    console.log(this.props)

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {this.props.bots.map(bot => {
            return(
              <div>
                <img src={bot.url} alt="robot-picture" onClick={e => this.props.putOnPage(bot)}/>
                <p>Id:{bot.id}</p>
                <p>name:{bot.name}</p>
                <p>health:{bot.health}</p>
                <p>damage:{bot.damage}</p>
                <p>armor:{bot.armor}</p>
                <p>Class:{bot.bot_class}</p>
                <p>Catchphrase:{bot.catch_phrase}</p>
              </div>
            )
          })}
    		</div>
  	  </div>
  	);
  }


};

export default BotCollection;
