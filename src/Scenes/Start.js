import Phaser from 'phaser';

export default class Start extends Phaser.Scene {
    constructor() {
        super("Start");
    }

    create() {
        const { config } = this.sys.game;
        const titleText = this.add.text(
            config.width / 2,
            config.height / 2,
            config.gameTitle,
            {
                font: "bold 32px Arial",
                fill: "#fff"
            }
        );
        titleText.setOrigin(0.5, 0.5);

        const startGameText = this.add.text(
            config.width / 2,
            config.height - 50,
            "Press Space to begin"
        );
        startGameText.setOrigin(0.5, 0.5);

        this.keys = this.input.keyboard.createCursorKeys();
    }

    update(){
        if(this.keys.space.isDown){
            this.scene.start("Main");
        }
    }
}