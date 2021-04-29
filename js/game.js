 import MainScene from "./scene.js"

 const config ={
     width: 1280,
     height: 1280,
     type: Phaser.Auto,
     parent: 'game-canvas',
     scene: [MainScene]
 }

 new Phaser.Game(config);