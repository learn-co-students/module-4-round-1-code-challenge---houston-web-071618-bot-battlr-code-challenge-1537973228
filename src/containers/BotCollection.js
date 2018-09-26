import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {	

	constructor() {
    super();
    this.state = {
      robots: [],
      // chosenRobot: null
    }
	}
	
	// const information = (obj) => {
  //     const arr = [];
  //     for (let ele in obj) {
  //       arr.push(`${ele}: ${obj[ele]}`)
  //     }
  //     return arr.map((element, i) => <p key={i}>{element}</p>)
  //   };

    // const allRobots = this.state.robots.map(({name}, i) => {
    //   return (
    //   <BotCard key={i} name={name} >
    //     <img id={i}  src={this.state.robot.url}/>
    //     {this.state.chosenRobot === this.state.robots[i] ? information(this.state.chosenRobot) : null}
    //   </BotCard>
    // );
    // });

  render(){
		const allRobots = this.state.robots.map(bot => 
		<BotCard bot={bot} />)

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
					{/* <div><img src={this.props.robots[0].avatar_url} /></div>
    		  <div>{this.props.robots[0].name}</div>
					<div>{this.props.robots[0].catchphrase}</div> */}
					{/* <BotCard name={this.props.robots[0].name}/> */}
					{allRobots}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
