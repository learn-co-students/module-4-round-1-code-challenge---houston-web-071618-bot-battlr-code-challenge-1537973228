import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

	// fetch data to parent.
  // pass down via props to army and collection?
	// BotSpecs has props?
	
	// addBot = () => {
	// 		this.props.bots.map((bot) => {
	// 		return <BotCard bot= {bot} />
	// 	})
	// }

  render() {

		const bots = this.props.bots

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
					{bots.map(bot => {
						return <BotCard bot={bot} enlistBot={this.props.enlistBot}/>
					})}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
