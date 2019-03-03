import './App.css';
import Game from './components/Game';
import React, { Component } from 'react';

class App extends Component {
    state = { game: null, score: 0 }
    initializeGame(game){
        this.setState({ game })
    }
    updateScore(points){
        this.setState((currentState) => {
           const score = currentState.score + points;

           return {
               score
           }
        });
    }
    render() {
        return (
          <div className="App">
              <h1>A Phaser Game</h1>
              <Game
                  score={this.state.score}
                  game={this.state.game}
                  initializeGame={this.initializeGame.bind(this)}
                  updateScore={this.updateScore.bind(this)}
              />
              <p>Use the arrow keys to move around and collect the coins.</p>
          </div>
        );
    }
}

export default App;
