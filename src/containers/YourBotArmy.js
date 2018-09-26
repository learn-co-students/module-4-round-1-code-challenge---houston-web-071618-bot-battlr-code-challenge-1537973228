import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  //your bot army code here...
  displayTheArmy = () => {
    return this.props.selectedBots.map(bot => {
      return <BotCard key={bot.id} details={bot} handleClick={this.props.handleClick} clickedOrNot={true} removeBotFromArmy={this.props.removeBotFromArmy}/>
    })
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.displayTheArmy()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
