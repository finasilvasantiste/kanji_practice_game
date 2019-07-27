import React, {Component} from 'react';


class FlashCard extends Component{
  constructor(props) {
    super(props);
    this.state = {
      kanji: null,
      meaning: null,
      seen: false
    };
  }


  render() {
    const kanji = this.state.kanji;
    const meaning = this.state.meaning;
    const seen = this.state.seen;

    console.log(kanji, meaning, seen);

    return (
      <div>
        <span>This will be a FlashCard.</span>
      <span>{kanji}</span>
      <span>{meaning}</span>
      <span>{seen ? 'True' : 'False'}</span>
      </div>
    );
  }
}

export default FlashCard;