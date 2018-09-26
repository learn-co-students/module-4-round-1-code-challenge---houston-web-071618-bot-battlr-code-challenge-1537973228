import React from 'react';
import BotCard from '../components/BotCard';
import BotsPage from '../containers/BotsPage';

class BotCollection extends React.Component {
  generateBotCards() {
    // console.log('Generating BotCards');
    return this.props.robots.map((robot) => {
      return <BotCard props={robot} enlistRobot={this.props.enlistRobot} />;
    });
  }

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          Collection of all bots
          {this.generateBotCards()}
        </div>
      </div>
    );
  }
}

export default BotCollection;
