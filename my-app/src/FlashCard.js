import React, {Component} from 'react';

class FlashCard extends Component{
  constructor(props) {
    super(props);
    this.state = {
      kanji: null,
      meaning: null
    };
  }

  render() {

    return (
      <div className="flashCard">
      <span className="kanji">{this.props.kanji}</span>
      <span className="meaning">{this.props.meaning}</span>
      </div>
    );
  }
}

export default FlashCard;