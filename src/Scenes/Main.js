import Phaser from 'phaser';

export default class Main extends Phaser.Scene {
    score = 0
    constructor() {
        super("Main");
    }

    preload(){
        // Parameters: name of the sprite, path of the image
        this.load.image('player', 'assets/player.png');

        this.load.image('coin', 'assets/coin.png');
    }

    create() {
        // Parameters: x position, y position, name of the sprite
        this.player = this.physics.add.sprite(100, 100, 'player');

        this.coin = this.physics.add.sprite(300, 300, 'coin');

        const style = { font: '20px Arial', fill: '#fff' };

        this.scoreText = this.add.text(20, 20, 'score: ' + this.score, style);

        this.arrow = this.input.keyboard.createCursorKeys();
    }

    update() {
        const { config } = this.sys.game;
        // If the player is overlapping with the coin
        if (this.physics.overlap(this.player, this.coin)) {
            // Call the new hit() method
            this.hit();
        }

        // Handle horizontal movements
        if (this.arrow.right.isDown) {
            // If the right arrow is pressed, move to the right
            this.player.x += 3;
        } else if (this.arrow.left.isDown) {
            // If the left arrow is pressed, move to the left
            this.player.x -= 3;
        }

        // Do the same for vertical movements
        if (this.arrow.down.isDown) {
            this.player.y += 3;
        } else if (this.arrow.up.isDown) {
            this.player.y -= 3;
        }

        // Keep the player within bounds
        if(this.player.x >= config.width){
            this.player.x = 1;
        }
        if(this.player.x <= 0){
            this.player.x = config.width;
        }
        if(this.player.y >= config.height){
            this.player.y = 1;
        }
        if(this.player.y <= 0){
            this.player.y = config.height;
        }
    }

    hit() {
        // Create a new tween
        this.tweens.add({
            targets: this.player, // on the player
            duration: 200, // for 200ms
            scaleX: 1.2, // that scale vertically by 20%
            scaleY: 1.2, // and scale horizontally by 20%
            yoyo: true, // at the end, go back to original scale
        });

        // Change the position x and y of the coin randomly
        this.coin.x = Phaser.Math.Between(100, 600);
        this.coin.y = Phaser.Math.Between(100, 300);

        // Increment the score by 10
        this.score += 10;

        // Display the updated score on the screen
        this.scoreText.setText('score: ' + this.score);
    }
}