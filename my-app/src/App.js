import React, {Component} from 'react';
import './App.css';
import FlashCard from './FlashCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        console.log(data);

        // Set state with data from csv
        that.setState({data : data});

        // Read some more, and recall this function
        return reader.read().then(processResult);
      });
    });
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.data);
    // fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
    //   .then(response => response.json())
    //   .then(response => {
    //         console.log(response);
    //         });
      // .then(state => this.setState(state));
  }

  render() {
    console.log('render');
    console.log(this.state.data ? this.state.data[0] : this.state.data);

    return (
      <div className="App">
        <div>
          <FlashCard kanji="(kanji)" meaning="(meaning)" seen="(false)"/>
        </div>
      </div>
    );
  }
}

export default App;