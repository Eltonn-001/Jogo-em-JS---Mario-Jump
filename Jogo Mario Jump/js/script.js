const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");

const jump = () => {
  mario.classList.add("jump");
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    jump();
  }
});

console.log("loop");
const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition < 90 && pipePosition > 0 && marioPosition < 60) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;
    mario.src = "img/game-over.png" ;
    mario.style.width = "70px";
    

    // clearInterval(loop)
  }
}, 10);

