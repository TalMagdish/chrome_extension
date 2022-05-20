// function App() {
//   return <div>Hello React!</div>;
// }

// export default App;
import Game from "./Game";
import "./style.css";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// const img = new Image(50, 50);
// img.src = "./assets/tank.png";

const game = new Game(canvas, ctx);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  game.run(ctx);
  
  window.requestAnimationFrame(draw);
}

draw();