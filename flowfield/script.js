window.onload = function () {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
  flowField.animate();
};

class FlowFieldEffect {
  #ctx;
  #width;
  #height;

  constructor(ctx, width, height) {
    this.#ctx = ctx;
    this.#ctx.strokeStyle = "white";
    this.#width = width;
    this.#height = height;
    console.log("flow field created");

    this.x = 0;
    this.y = 0;
  }

  #draw(x, y) {
    const length = 300;
    this.#ctx.beginPath();
    this.#ctx.moveTo(x, y);
    this.#ctx.lineTo(x + length, y + length);
    this.#ctx.stroke();
  }

  animate() {
    console.log("animating");
    this.#draw(this.x, this.y);
    this.x += 1;
    this.y += 0.5;
    requestAnimationFrame(this.animate.bind(this));
  }
}
