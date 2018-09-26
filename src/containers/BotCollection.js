import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {

	// fetch data to parent. 
  // pass down via props to army and collection?
  // BotSpecs has props?

	state = {
    bots: [],
    isAdded: false
	}

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(response => response.json())
    .then( 
			// console.log
			// note: fetching works
			data => {
      let bots = data.map((bot) => {
        return (
          <div key={bot.id}>
            <img src={bot.avatar_url} alt=""></img>
          </div>
        )
			})
			this.setState({bots: bots})
		}
		)
		// debugger
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}
					{this.state.bots}
					{/* <BotCard /> */}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
