import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {

  constructor() {
    super();
    this.state = {
      robots: null,
      chosenRobot: null
    }
  }

  componentDidMount = () => {
    this.fetchRobots()
  }

  fetchRobots = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(robots => {
      this.addRobotsToState(robots)
      console.log(robots)
      debugger
    })
  }

  addRobotsToState = (robots) => {
    this.setState({
      robots: robots
    })
  }

  render() {
    
		

    return (
      <div>
        <YourBotArmy />
        {this.state.robots ? 
        <BotCollection robots={this.state.robots}/> : <p>Loading</p>}
      </div>
    );
  }

}

export default BotsPage;
