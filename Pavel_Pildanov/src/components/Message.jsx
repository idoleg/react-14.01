import React, {Component} from "react";
import PropTypes from 'prop-types';

export class Message extends Component {  

  static propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string,
  };

  render() {
    return (
      <React.Fragment>

        { this.props.items.map(item => (
          <p key={ item.id }>
            <b>я: </b>
            { item.text }
          </p>
        )) }

      </React.Fragment>

    )
  }
}


  

/*
const MessageList = [
 { name: "Bot Sony", content: "Whats up! What can i do for you?" },
];

const BotAnswer = 
  { name: "Bot Sony", content: "Im a just a stupid Bot! I repeat what are you talking about to smart humans!" },;
*/
