import React from "react";
import BotCollection from "./BotCollection.js";
import BotCard from "../components/BotCard.js"

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
  	allBots: [],
    isLoading: false
  }

	componentDidMount() {
    this.setState({isLoading: true});

		fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
			.then(resp => resp.json())
			.then((data) => {
				this.setState({
					allBots: data,
          isLoading: false
				})
			})
	}

  render() {
    const {allBots, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <div>
      	<BotCollection allBots={this.state.allBots} />
  
      </div>
    );
  }

}

export default BotsPage;
