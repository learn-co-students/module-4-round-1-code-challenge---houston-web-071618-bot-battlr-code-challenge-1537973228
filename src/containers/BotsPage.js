import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
const BOT_URL = "https://bot-battler-api.herokuapp.com/api/v1/bots";

class BotsPage extends React.Component {
	//start here with your code for step one
	constructor() {
		super();

		this.state = {
			allBots: [],
			selectedBot: null,
			myArmy: [],
			isLoading: true
		};

		this.fetchBots = this.fetchBots.bind(this);
	}

	componentDidMount() {
		this.fetchBots();
	}

	fetchBots() {
		fetch(BOT_URL)
			.then(resp => resp.json())
			.then(bots =>
				this.setState({
					allBots: bots,
					isLoading: false
				})
			);
	}

	handleClick = (key) => {
		let myBot = this.state.allBots.filter( bot => bot.id === key)
		//debugger
		let findDuplicateArmy = this.state.myArmy
		if (findDuplicateArmy.find( bot => bot.id === key)) {
			this.setState({
				myArmy: findDuplicateArmy.filter( bot => bot.id !== key)
				}
				)
			return
		}
		//debugger

		let myArmy = [...this.state.myArmy, myBot[0]]
		this.setState({
			selectedBot: myBot,
			myArmy: myArmy
		})
		//console.log(this.state)
		//debugger
	}

	render() {
		return (
			<div>
				<YourBotArmy myArmy={this.state.myArmy} handleClick={this.handleClick}/>
				{this.state.isLoading ? (
					"Loading"
				) : (
					<BotCollection handleClick={this.handleClick} allBots={this.state.allBots} selectedBot={this.state.selectedBot}/>
				)}
			</div>
		);
	}
}

export default BotsPage;
