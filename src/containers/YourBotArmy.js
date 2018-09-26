import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  
  
  renderBotCard = () => {
		return this.props.selectedBots.map((bot) => {
			return <BotCard bot={bot} selectBot={this.props.selectBotForArmy}/>
		} )
	}

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBotCard()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
