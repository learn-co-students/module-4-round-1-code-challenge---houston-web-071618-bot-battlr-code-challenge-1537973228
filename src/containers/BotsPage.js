import React from 'react';
import BotCollection from './BotCollection';
import BotCard from '../components/BotCard';

let botsURL = 'https://bot-battler-api.herokuapp.com/api/v1/bots';
class BotsPage extends React.Component {
  state = {
    enlistedRobots: [],
    robots: []
    // [
    //   {
    //     id: 1,
    //     name: 'bvt-99',
    //     health: 92,
    //     damage: 25,
    //     armor: 74,
    //     bot_class: 'Support',
    //     catchphrase: '111011001111110111100111101111000',
    //     avatar_url:
    //       'https://robohash.org/iustodoloremrerum.png?size=300x300&set=set1',
    //     created_at: '2018-02-01T18:41:32.174Z',
    //     updated_at: '2018-02-01T18:41:32.174Z'
    //   },
    //   {
    //     id: 2,
    //     name: 'DOn-21',
    //     health: 61,
    //     damage: 86,
    //     armor: 20,
    //     bot_class: 'Assault',
    //     catchphrase: '1100000110010000100110010100110',
    //     avatar_url:
    //       'https://robohash.org/ipsumassumendaab.png?size=300x300&set=set1',
    //     created_at: '2018-02-01T18:41:32.179Z',
    //     updated_at: '2018-02-01T18:41:32.179Z'
    //   }
    // ]
  };

  componentDidMount() {
    fetch(botsURL)
      .then((res) => res.json())
      .then((data) => this.setState({ robots: data }));
  }

  enlistRobot(botId) {
    // this.setState({ ...state, enlistedRobots: botID });
  }

  render() {
    console.log(this.state.robots);
    return (
      <div>
        <BotCollection
          enlistedRobots={this.state.enlistedRobots}
          robots={this.state.robots}
          enlistRobot={enlistRobot}
        />
      </div>
    );
  }
}

export default BotsPage;
