import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  
  // componentWillMount() {
  //   let newProps = this.props;
  //   delete newProps.asyncHandler;
  //   this.setState({properties: newProps})
  // }
  
  renderBotCard = () => {
    // console.log(this.props)
    
		return this.props.selectedBots.map((bot) => {
			return <BotCard bot={bot} 
      selectBot={this.props.handleBotRemoval}/>
		} )
	}

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBotCard()}
           
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
