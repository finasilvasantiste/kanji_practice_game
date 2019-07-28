import React, {Component} from 'react';
import shuffleIt from "./shuffleLogic";
import FlashCard from "./FlashCard";
import Button from "react-bootstrap/Button";
import {ExamModeButtons, PracticeModeButtons} from "./buttons/buttonCollection";

let data;

class FlashCardDeck extends Component{
  constructor(props) {
    super(props);
    this.state = {
      deckOrder: null,
      deckLength: null,
      hasFinishedDeck: false,
      rememberedKanji: 0,
      currentFlashCard: {
        kanji: null,
        meaning: null,
        index: null
      },
    };

    this.handleButtonReShuffleClick = this.handleButtonReShuffleClick.bind(this);
    this.handleButtonNext = this.handleButtonNext.bind(this);
    this.handleButtonRemember = this.handleButtonRemember.bind(this);
  }

  componentDidMount() {
    const that = this;
    data = this.props.data;
    const deckOrder = that.shuffleFlashCardOrder(data);

    that.setState({
      deckOrder: deckOrder,
      deckLength: data.length
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

  setNextFlashCard(nextFlashCardIndex){
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

  shuffleFlashCardOrder(){
    return shuffleIt(data.length);
  }

  handleButtonReShuffleClick(){
    const newShuffledOrder = this.shuffleFlashCardOrder();
    this.setCurrentFlashCard(newShuffledOrder);

    if (this.state.hasFinishedDeck) {
      this.setState({
        hasFinishedDeck: false,
      })
    }

    this.setState({
      rememberedKanji: 0
    })
  }

  handleButtonNext(){
    const nextFlashCardIndex = this.state.currentFlashCard['index']+1;

    if(nextFlashCardIndex < data.length){
      this.setNextFlashCard(nextFlashCardIndex);
    } else {
      this.setState({
        hasFinishedDeck: true
      })
    }
  }

  handleButtonRemember(){
    const newRememberedKanji = this.state.rememberedKanji+1;
    const deckLength = this.state.deckLength;
    const hasFinishedDeck = this.state.hasFinishedDeck;

    if(newRememberedKanji > deckLength){
      return
    }else if(hasFinishedDeck){
      return
    }

    this.setState({
      rememberedKanji: newRememberedKanji,
    })

    this.handleButtonNext();
  }

  render() {
    const hasFinishedDeck = this.state.hasFinishedDeck;
    const currentKanji = this.state.currentFlashCard.kanji;
    const currentMeaning = this.state.currentFlashCard.meaning;
    const rememberedKanji = this.state.rememberedKanji;
    const deckLength = this.state.deckLength;

    const practiceMode = this.props.practiceMode;
    const examMode = this.props.examMode;

    return (
      <div className="flash_card_deck">
        <div>
          <FlashCard kanji={currentKanji} meaning={currentMeaning}/>
          <Button variant="light" onClick={this.handleButtonReShuffleClick}>Reshuffle deck</Button>
          {practiceMode && !examMode
            ? <PracticeModeButtons handleButtonNext={this.handleButtonNext}/>
            : null
          }
          {!practiceMode && examMode
            ? <ExamModeButtons handleButtonNext={this.handleButtonNext}
                handleButtonRemember={this.handleButtonRemember}
                rememberedKanji={rememberedKanji} deckLength={deckLength}
              />
            : null
          }
          {hasFinishedDeck
            ? <span className="finished_deck">You've finished this deck!</span>
            : null
          }
        </div>
      </div>
    );
  }
}

export default FlashCardDeck;