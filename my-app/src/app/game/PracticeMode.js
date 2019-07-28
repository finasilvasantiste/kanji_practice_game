import React, {Component} from 'react';
import FlashCardDeck from "./FlashCardDeck";

class PracticeMode extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data;
    const practiceMode = this.props.practiceMode;
    const examMode = this.props.examMode;

    return (
      <div className="practice_mode">
        <span>Practice Mode</span>
        <FlashCardDeck data={data} practiceMode={practiceMode} examMode={examMode}/>
      </div>
    );
  }
}

export default PracticeMode;