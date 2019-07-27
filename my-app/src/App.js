import React, {Component} from 'react';
import './App.css';
import FlashCard from './FlashCard';
import shuffle from './shuffle_logic';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      order: null
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

        // Set state with data from csv
        that.setState({
          data : data,
          order : that.setFlashCardOrder(data.length)
          });

        // Read some more, and recall this function
        return reader.read().then(processResult);
      });
    });
  }

  setFlashCardOrder(dataLength){
    console.log('setFlashCardOrder');
    console.log(dataLength);
    const lengthArray = Array.from(Array(dataLength).keys());
    console.log(shuffle(lengthArray));

  }

  render() {
    // console.log('render');
    // console.log(this.state.data ? this.state.data[0] : this.state.data);

    return (
      <div className="App">
        <div>
          <FlashCard kanji="(kanji)" meaning="(meaning)" seen="true"/>
        </div>
      </div>
    );
  }
}

export default App;