import React, {Component, Fragment} from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import FlashCard from './FlashCard';
import shuffleIt from './shuffleLogic';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      order: null,
      currentFlashCard : null,
    };
  }

  componentDidMount() {
    const that = this;

    fetch('/data').then((response) => {
      const decoder = new TextDecoder();
      const reader = response.body.getReader();

      // read() returns a promise that resolves
      // when a value has been received
      reader.read().then(function processResult(result) {
        if (result.done) return;
        const data = JSON.parse(decoder.decode(result.value, {stream: true}));
        const order = that.setFlashCardOrder(data);

        // Set state with data from csv
        that.setState({
          data : data,
          order : order,
          currentFlashCard : order[0]
          });

        // Read some more, and recall this function
        return reader.read().then(processResult);
      });
    });
  }

  // Shuffle order
  setFlashCardOrder(data){
    const sequentialNumbersUpToLength = Array.from(Array(data.length).keys());
    const shuffledOrder = shuffleIt(sequentialNumbersUpToLength);

    return shuffledOrder;
  }

  render() {
    // console.log('render');
    // console.log(this.state.data ? this.state.data[0] : this.state.data);

    const hasLoadedData = !!this.state.data;

    return (
      <Fragment>
        { hasLoadedData
          ? <div className="App">
              <div>
                <FlashCard data={this.state.data[this.state.currentFlashCard]}/>
                <Button variant="light">Next</Button>
              </div>
            </div>
          : null
        }
      </Fragment>
    );
  }
}

export default App;