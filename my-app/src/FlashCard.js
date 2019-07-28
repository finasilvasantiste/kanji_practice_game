import React, {Component} from 'react';
import Button from "react-bootstrap/Button";

class FlashCard extends Component{
  constructor(props) {
    super(props);

    this.state = {
      kanji: null,
      meaning: null,
      showMeaning: false,
    };

    this.handleButtonShowMeaning = this.handleButtonShowMeaning.bind(this);
  }

  handleButtonShowMeaning(){
    let visibility = !this.state.showMeaning;

    this.setState({
      showMeaning: visibility
    });
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      kanji: nextProps.kanji,
      meaning: nextProps.meaning,
      showMeaning: false,
    })
  }

  render() {
    const visibility = this.state.showMeaning ? 'Hide' : 'Show';
    const showMeaning = this.state.showMeaning;
    const kanji = this.state.kanji;
    const meaning = this.state.meaning;

    return (
      <div className="flashCard">
      <span className="kanji">{kanji}</span>
        {showMeaning
        ? <span className="meaning">{meaning}</span>
        : null
        }
      <Button variant="light" onClick={this.handleButtonShowMeaning}>{visibility} meaning</Button>
      </div>
    );
  }
}

export default FlashCard;