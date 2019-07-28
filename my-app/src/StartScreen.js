import React, {Component, Fragment} from 'react';
import PracticeMode from "./PracticeMode";

class StartScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Fragment>
        <span>Start Screen</span>
        <PracticeMode data={this.props.data}/>
      </Fragment>
    );
  }
}

export default StartScreen;