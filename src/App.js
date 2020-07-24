import React from 'react';
import './App.css';
import ConventionsGrid from "./ConventionsGrid.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conventions: null,
      tickHandlers: {}
    };

    //allows the 'registerForAppTick' function to use the 'this' keyword to refer to the current 'App' instance.
    this.registerForAppTick = this.registerForAppTick.bind(this);

    //sets a timer that calls every conventionitem's update handler every second.
    setInterval(() => {
      for(let [key, func] of Object.entries(this.state.tickHandlers)) {
        //call a conventionitem's update handler (updateTimeLeft function).
        func();
      }
    }, 1000);
  }

  registerForAppTick(conName, handler) {
    //this function takes a convention name and its 'update' handler function, which gets called every second.
    var handlers = this.state.tickHandlers;
    handlers[conName] = handler;
    this.setState({tickHandlers: handlers});
  }

  componentDidMount() {
    //fetch the conventions and parse the json object.
    fetch("https://raw.githubusercontent.com/AzureKitsune/AnimeConCountdown/master/data/conventions.json")
      .then(res => res.json())
      .then(
        (result) => {
          //saves the convention information into this object's state.
          this.setState({conventions: result.conventions});
        },
        (error) => {
          alert(error);
        });
  }

  render(props) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Anime Convention Countdown (2020-2021)</h1>
          <p>Countdown to late 2020 & early 2021 anime conventions.</p>
        </header>
        <div id="main-content">   
          <ConventionsGrid conventions={this.state.conventions} apptick={this.registerForAppTick} />
        </div>
      </div>
    );
  }
}

export default App;
