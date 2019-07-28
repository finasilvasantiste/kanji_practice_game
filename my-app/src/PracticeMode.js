import React, {Component, Fragment} from 'react';
import shuffleIt from "./shuffleLogic";
import FlashCard from "./FlashCard";
import Button from "react-bootstrap/Button";

let data;

class PracticeMode extends Component{
  constructor(props) {
    super(props);
    this.state = {
      deckOrder: null,
      hasFinishedDeck: false,
      currentFlashCard: {
        kanji: null,
        meaning: null,
        index: null
      },
    };

    this.handleButtonReShuffleClick = this.handleButtonReShuffleClick.bind(this);
    this.handleButtonNext = this.handleButtonNext.bind(this);
  }

  componentDidMount() {
    const that = this;

    data = this.props.data;
    const deckOrder = that.shuffleFlashCardOrder(data);

    that.setState({
      deckOrder : deckOrder,
    });

    that.setCurrentFlashCard(deckOrder);
  }

  setCurrentFlashCard(deckOrder){
    this.setState({
      deckOrder: deckOrder,
      currentFlashCard: {
        kanji: data[deckOrder[0]]['kanji'],
        meaning: data[deckOrder[0]]['meaning'],
        index: 0,
      }
    });
  }

  getNextFlashCard(nextFlashCardIndex){
    const nextKanji = data[this.state.deckOrder[nextFlashCardIndex]]['kanji'];
    const nextMeaning = data[this.state.deckOrder[nextFlashCardIndex]]['meaning'];

    this.setState({
      currentFlashCard: {
        kanji: nextKanji,
        meaning: nextMeaning,
        index: nextFlashCardIndex,
      }
    });

  }

  setFinishedDeck(){
    const completionStage = !this.state.hasFinishedDeck;

    this.setState({
      hasFinishedDeck: completionStage
    })
  }

  // Shuffle deck
  shuffleFlashCardOrder(){
    const sequentialNumbersUpToLength = Array.from(Array(data.length).keys());
    const shuffledOrder = shuffleIt(sequentialNumbersUpToLength);

    console.log('shuffledOrder');
    console.log(shuffledOrder);
    return shuffledOrder;
  }

  handleButtonReShuffleClick(){
    const newShuffledOrder = this.shuffleFlashCardOrder();
    this.setCurrentFlashCard(newShuffledOrder);
    if (this.state.hasFinishedDeck) {
      this.setFinishedDeck();
    }
  }

  handleButtonNext(){
    const nextFlashCardIndex = this.state.currentFlashCard['index']+1;

    if(nextFlashCardIndex < data.length){
      this.getNextFlashCard(nextFlashCardIndex);
    } else {
      this.setFinishedDeck();
    }
  }

  render() {
    const hasLoadedData = !!data;
    const hasFinishedDeck = this.state.hasFinishedDeck;
    const currentKanji = this.state.currentFlashCard.kanji;
    const currentMeaning = this.state.currentFlashCard.meaning;

    return (
      <Fragment>
        { hasLoadedData
          ? <div className="App">
            <div>
              <FlashCard kanji={currentKanji} meaning={currentMeaning}/>
              <Button variant="light" onClick={this.handleButtonReShuffleClick}>Reshuffle deck</Button>
              <Button variant="light" onClick={this.handleButtonNext}>Next</Button>
              {hasFinishedDeck
                ? <span className="finished_deck">You've finished this deck!</span>
                : null}
            </div>
          </div>
          : null
        }
      </Fragment>
    );
  }
}

export default PracticeMode;