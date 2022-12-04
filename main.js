import './style4p.css'

let m = document.getElementById('life').getContext('2d');
let draw = (x, y, c, s) => {
  m.fillStyle = c;
  m.fillRect(x, y, s, s);
}

let particles = []
let particle = (x, y, c) => {
  return {'x': x, 'y': y, 'vx': 0, 'vy': 0, 'color': c}
}

let random = () => {
  return Math.random()*400+50
}

let create = (number, color) => {
  let group = []
  for(let i = 0; i < number; i++) {
    group.push(particle(random(), random(), color))
    particles.push(group[i])
  }
  return group
}

let rule = (particles1, particles2, g) => {
  let a, b, fx, fy;
  for(let i = 0; i < particles1.length; i++) {
    fx = 0;
    fy = 0;
    for(let j = 0; j < particles2.length; j++) {
      a = particles1[i];
      b = particles2[j];

      let dx = a.x - b.x;
      let dy = a.y - b.y;

      let d = Math.sqrt(dx * dx + dy * dy);
      
      if(d > 0 && d < 80) {
        let F = g * 1/d;
        fx += (F * dx)
        fy += (F * dy)
      }
    }
    
    a.vx = (a.vx + fx) * 0.5
    a.vy = (a.vy + fy) * 0.5
    a.x += a.vx;
    a.y += a.vy;
    if(a.x <= 0 || a.x >= 500) { a.vx *= -1}
    if(a.y <= 0 || a.y >= 500) { a.vy *= -1}
  }
}

let yellow = create(200, 'yellow')
let red = create(200, 'red')
let green = create(200, 'green')

let sliderGG = document.getElementById("sliderGG");
let ggo = document.getElementById("ggo");
let sliderGGOutput = sliderGG.value / 100
ggo.innerHTML = sliderGG.value
sliderGG.oninput = function() {
  sliderGGOutput = this.value / 100
  ggo.innerHTML = this.value
}

let sliderGR = document.getElementById("sliderGR");
let gro = document.getElementById("gro");
let sliderGROutput = sliderGR.value / 100
gro.innerHTML = sliderGR.value
sliderGR.oninput = function() {
  sliderGROutput = this.value / 100
  gro.innerHTML = this.value
}

let sliderGY = document.getElementById("sliderGY");
let gyo = document.getElementById("gyo");
let sliderGYOutput = sliderGY.value / 100
gyo.innerHTML = sliderGY.value
sliderGY.oninput = function() {
  sliderGYOutput = this.value / 100
  gyo.innerHTML = this.value
}

let sliderRR = document.getElementById("sliderRR");
let rro = document.getElementById("rro");
let sliderRROutput = sliderRR.value / 100
rro.innerHTML = sliderRR.value
sliderRR.oninput = function() {
  sliderRROutput = this.value / 100
  rro.innerHTML = this.value
}

let sliderRG = document.getElementById("sliderRG");
let rgo = document.getElementById("rgo");
let sliderRGOutput = sliderRG.value / 100
rgo.innerHTML = sliderRG.value
sliderRG.oninput = function() {
  sliderRGOutput = this.value / 100
  rgo.innerHTML = this.value
}

let sliderRY = document.getElementById("sliderRY");
let ryo = document.getElementById("ryo");
let sliderRYOutput = sliderRY.value / 100
ryo.innerHTML = sliderRY.value
sliderRY.oninput = function() {
  sliderRYOutput = this.value / 100
  ryo.innerHTML = this.value
}

let sliderYY = document.getElementById("sliderYY");
let yyo = document.getElementById("yyo");
let sliderYYOutput = sliderYY.value / 100
yyo.innerHTML = sliderYY.value
sliderYY.oninput = function() {
  sliderYYOutput = this.value / 100
  yyo.innerHTML = this.value
}

let sliderYG = document.getElementById("sliderYG");
let ygo = document.getElementById("ygo");
let sliderYGOutput = sliderYG.value / 100
ygo.innerHTML = sliderYG.value
sliderYG.oninput = function() {
  sliderYGOutput = this.value / 100
  ygo.innerHTML = this.value
}

let sliderYR = document.getElementById("sliderYR");
let yro = document.getElementById("yro");
let sliderYROutput = sliderYR.value / 100
yro.innerHTML = sliderYR.value
sliderYR.oninput = function() {
  sliderYROutput = this.value / 100
  yro.innerHTML = this.value
}

let update = () => {
  // rule(yellow, yellow, 1)

  // rule( red, red, -0.1)
  // rule( red, yellow, -0.01)
  // rule( yellow, red, 0.01)

  // rule( red, red, 0.1)
  // rule( yellow, red, 0.15)
  // rule( green, green, -0.7)
  // rule( green, red, -0.2)
  // rule( red, green, -0.1)

  // rule( green, green, -0.32)
  // rule( green, red, -0.17)
  // rule( green, yellow, 0.34)
  // rule( red, red, -0.1)
  // rule( red, green, -0.34)
  // rule( yellow, yellow, 0.15)
  // rule( yellow, green, -0.20)

// console.log(sliderOutput);
  rule( green, green, sliderGGOutput)
  rule( green, red, sliderGROutput)
  rule( green, yellow, sliderGYOutput)
  rule( red, red, sliderRROutput)
  rule( red, green, sliderRGOutput)
  rule( red, yellow, sliderRYOutput)
  rule( yellow, yellow, sliderYYOutput)
  rule( yellow, green, sliderYGOutput)
  rule( yellow, red, sliderYROutput)

  m.clearRect(0, 0, 500, 500)
  draw(0, 0, 'black', 500)
  for(let i= 0; i < particles.length; i++) {
    draw(particles[i].x, particles[i].y, particles[i].color, 5)
  }
  setTimeout(() => {
    requestAnimationFrame(update)
  }, 50);
} 

update()

let button = document.querySelector('button')
button.addEventListener('click', reset) 

function reset(params) {
  m.clearRect(0, 0, 500, 500)
  // draw(0, 0, 'black', 500)

  particles = []
   yellow = create(200, 'yellow')
   red = create(200, 'red')
   green = create(200, 'green')
  // update()
}