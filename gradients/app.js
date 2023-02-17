import { GlowParticle } from "./glowparticle.js";

const COLOURS = [
  { r: 45, g: 74, b: 227 }, // blue
  { r: 225, g: 104, b: 248 }, // purple
];

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
    this.totalParticles = 1;
    this.particles = [];
    this.maxRadius = 90;
    this.minRadius = 40;

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);
    this.createParticles();
  }

  createParticles() {
    let curColour = 0;
    this.particles = [];

    for (let i = 0; i < this.totalParticles; i++) {
      const particle = new GlowParticle(
        Math.random() * this.stageWidth,
        Math.random() * this.stageHeight,
        Math.random() * (this.maxRadius - this.minRadius) + this.minRadius,
        COLOURS[curColour]
      );

      if (++curColour >= COLOURS.length) {
        curColour = 0;
      }

      this.particles[i] = particle;
    }
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    for (let i = 0; i < this.totalParticles; i++) {
      const particle = this.particles[i];
      particle.animate(this.ctx, this.stageWidth, this.stageHeight);
    }
  }
}

window.onload = () => {
  new App();
};
