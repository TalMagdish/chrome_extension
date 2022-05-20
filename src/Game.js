class Game {
  constructor(canvas, ctx) {
      this.canvas = canvas;
      this.ctx = ctx;
  }

  run(ctx) {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Invaders shot down: ");
    ctx.fillText("Missiles remaining: ");
  }

}

export default Game;