import React from "react";

const BotCard = props => {

  let botType;

  switch (props.details.bot_class) {
    case "Assault":
      botType = <i className="icon military" />;
      break;
    case "Defender":
      botType = <i className="icon shield" />;
      break;
    case "Support":
      botType = <i className="icon ambulance" />;
      break;
    default:
      botType = <div />;
  }

  const handleClick = (e) => {
    if (props.clickedOrNot) {
      props.removeBotFromArmy(e)
    } else {
      props.handleClick(e)
    }
  }


  return (
    <div className="ui column">
      <div
        className="ui card"
        key={props.details.id}
        onClick={(e) => handleClick(e)}
      >
        <div className="image">
          <img id={props.details.id} alt="oh no!" src={props.details.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {props.details.name} {botType}
          </div>

          <div className="meta text-wrap">
            <small>{props.details.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {props.details.health}
          </span>

          <span>
            <i className="icon lightning" />
            {props.details.damage}
          </span>
          <span>
            <i className="icon shield" />
            {props.details.armor}
          </span>
        </div>
      </div>
    </div>
  );

};

export default BotCard;
