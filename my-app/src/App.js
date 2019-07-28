import React, {Component, Fragment} from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import FlashCard from './FlashCard';
import shuffleIt from './shuffleLogic';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : null,
      order : null,
      currentFlashCard : {
        kanji : null,
        meaning : null
      },
    };

    this.handleButtonReShuffleClick = this.handleButtonReShuffleClick.bind(this);
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
        const order = that.shuffleFlashCardOrder(data);

        // Set state with data from csv
        that.setState({
          data : data,
          order : order,
          currentFlashCard : {
            kanji : data[order[0]]['kanji'],
            meaning : data[order[0]]['meaning']
            }
          });

        // Read some more, and recall this function
        return reader.read().then(processResult);
      });
    });
  }

  setCurrentFlashCard(order){
    this.setState({
      currentFlashCard : {
        kanji : this.state.data[order[0]]['kanji'],
        meaning : this.state.data[order[0]]['meaning']
      }
    });

    console.log(this.state.currentFlashCard);
  }

  // Shuffle order
  shuffleFlashCardOrder(data){
    const sequentialNumbersUpToLength = Array.from(Array(data.length).keys());
    const shuffledOrder = shuffleIt(sequentialNumbersUpToLength);

    console.log(shuffledOrder);
    return shuffledOrder;
  }

  handleButtonReShuffleClick(){
    const newShuffledOrder = this.shuffleFlashCardOrder(this.state.data);
    this.setCurrentFlashCard(newShuffledOrder);
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
                <FlashCard kanji={this.state.currentFlashCard.kanji} meaning={this.state.currentFlashCard.meaning}/>
                <Button variant="light" onClick={this.handleButtonReShuffleClick}>Reshuffle deck</Button>
              </div>
            </div>
          : null
        }
      </Fragment>
    );
  }
}

export default App;