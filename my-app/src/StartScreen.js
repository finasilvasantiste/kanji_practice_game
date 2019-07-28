import React, {Component, Fragment} from 'react';
import PracticeMode from "./PracticeMode";

class StartScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="start_screen">
        <span>Start Screen</span>
        <PracticeMode data={this.props.data}/>
      </div>
    );
  }
}

export default StartScreen;