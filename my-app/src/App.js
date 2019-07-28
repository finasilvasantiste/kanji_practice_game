import React, {Component, Fragment} from 'react';
import './App.css';
import StartScreen from "./StartScreen";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    const that = this;

    fetch('/data').then((response) => {
      const decoder = new TextDecoder();
      const reader = response.body.getReader();

      // read() returns a promise that resolves when a value has been received
      reader.read().then(function processResult(result) {
        if (result.done) return;
        const data = JSON.parse(decoder.decode(result.value, {stream: true}));

        // Set state with data from csv
        that.setState({
          data: data
          });

        // Read some more, and recall this function
        return reader.read().then(processResult);
      });
    });
  }

  render() {
    const hasLoadedData = !!this.state.data;

    return (
      <div className="App">
        {hasLoadedData
        ? <StartScreen data={this.state.data}/>
        : null
        }
      </div>
    );
  }
}

export default App;