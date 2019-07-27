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

  componentDidMount() {
    this.setState({
      kanji: this.props.kanji,
      meaning: this.props.meaning,
      seen: this.props.seen
    })
  }

  render() {
    const kanji = this.state.kanji;
    const meaning = this.state.meaning;
    const seen = this.state.seen;

    // console.log(kanji, meaning, seen);

    return (
      <div className={'flash_card'}>
      <span className={'kanji'}>{kanji}</span>
      <span className={'meaning'}>{meaning}</span>
      <span className={'seen'}>{seen ? 'True' : 'False'}</span>
      </div>
    );
  }
}

export default FlashCard;