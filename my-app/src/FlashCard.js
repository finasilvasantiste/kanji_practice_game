import React, {Component} from 'react';
import Button from "react-bootstrap/Button";

class FlashCard extends Component{
  constructor(props) {
    super(props);

    this.state = {
      kanji: null,
      meaning: null,
      showMeaning : false,
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

    return (
      <div className="flashCard">
      <span className="kanji">{this.props.kanji}</span>
        {this.state.showMeaning
        ? <span className="meaning">{this.props.meaning}</span>
        : null
        }
      <Button variant="light" onClick={this.handleButtonShowMeaning}>{visibility} meaning</Button>
      </div>
    );
  }
}

export default FlashCard;