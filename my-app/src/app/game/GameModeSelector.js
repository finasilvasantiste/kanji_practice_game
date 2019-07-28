import React, {Component} from 'react';
import PracticeMode from "./PracticeMode";
import Button from "react-bootstrap/Button";
import ExamMode from "./ExamMode";

class GameModeSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      practiceMode: false,
      examMode: false
    };

    this.handlePracticeModeButton = this.handlePracticeModeButton.bind(this);
    this.handleExamModeButton = this.handleExamModeButton.bind(this);
  }

  handlePracticeModeButton(){
    this.setState({
      practiceMode: true,
      examMode: false
    })
  }

  handleExamModeButton(){
    this.setState({
      practiceMode: false,
      examMode: true
    })
  }

  render() {
    const practiceMode = this.state.practiceMode;
    const examMode = this.state.examMode;
    const data = this.props.data;

    return (
      <div className="game_mode">
        <span>Choose your game mode:</span>
        <Button variant="dark" onClick={this.handlePracticeModeButton}>Practice Mode</Button>
        <Button variant="dark" onClick={this.handleExamModeButton}>Exam Mode</Button>
        { practiceMode && !examMode
        ? <PracticeMode data={data} practiceMode={practiceMode} examMode={examMode}/>
        : null
        }
        { !practiceMode && examMode
        ? <ExamMode data={data} practiceMode={practiceMode} examMode={examMode}/>
        : null
        }
      </div>
    );
  }
}

export default GameModeSelector;