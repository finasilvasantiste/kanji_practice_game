import React, {Component} from 'react';

class FlashCard extends Component{
  constructor(props) {
    super(props);
    this.state = {
      kanji: null,
      meaning: null
    };
  }

  componentDidMount() {
    this.setState({
      kanji: this.props.data['kanji'],
      meaning: this.props.data['meaning']
    })
  }

  render() {
    const kanji = this.state.kanji;
    const meaning = this.state.meaning;

    return (
      <div className="flashCard">
      <span className="kanji">{kanji}</span>
      <span className="meaning">{meaning}</span>
      </div>
    );
  }
}

export default FlashCard;