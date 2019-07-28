import React, {Component} from 'react';
import FlashCardDeck from "./FlashCardDeck";

class ExamMode extends Component{
  constructor(props){
    super(props);
  }

  render () {
    const data = this.props.data;
    const practiceMode = this.props.practiceMode;
    const examMode = this.props.examMode;

    return (
      <div className="exam_mode">
        <span>Exam Mode</span>
        <FlashCardDeck data={data} practiceMode={practiceMode} examMode={examMode}/>
      </div>
    );
  }
}

export default ExamMode;