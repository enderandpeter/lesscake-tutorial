import Phaser from 'phaser';
import React, { Component } from 'react';
import Main from '../Scenes/Main';
import Start from '../Scenes/Start';

export const config = {
    width: 700, // Width of the game in pixels
    height: 400, // Height of the game in pixels
    backgroundColor: '#3498db', // The background color (blue)
    scene: [Start, Main], // The name of the scene we created
    physics: { default: 'arcade' }, // The physics engine to use
    parent: 'game', // Create the game inside the <div id="game">
    title: 'A Ghost Among Monsters',
};

export default class Game extends Component {
    componentWillMount(){
        this.props.initializeGame(new Phaser.Game(config));
    }
    render(){
        return <div id="game"></div>;
    }
}