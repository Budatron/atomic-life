import './style4p.css'
// REFERENCIA: https://www.youtube.com/watch?v=0Kx4Y9TVMGg&ab_channel=Brainxyz 
let m = document.getElementById('life').getContext('2d');
let draw = (x, y, c, s) => {
  m.fillStyle = c;
  m.fillRect(x, y, s, s);
}

let particles = []
let numOfParticles = 400;
let particle = (x, y, c) => {
  return {'x': x, 'y': y, 'vx': 0, 'vy': 0, 'color': c}
}

let random = () => {
  return Math.random()*900+50
}

let randomP = () => {
  return Math.floor(Math.random() * 201) -100
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
    if(a.x <= 200 || a.x >= 800) { a.vx *= -1}
    if(a.y <= 200 || a.y >= 800) { a.vy *= -1}
  }
}

let yellow = create(numOfParticles, 'yellow')
let red = create(numOfParticles, 'red')
let green = create(numOfParticles, 'green')
let blue = create(numOfParticles, 'blue')

// GREEN
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

let sliderGB = document.getElementById("sliderGB");
let gbo = document.getElementById("gbo");
let sliderGBOutput = sliderGB.value / 100
gbo.innerHTML = sliderGB.value
sliderGB.oninput = function() {
  sliderGBOutput = this.value / 100
  gbo.innerHTML = this.value
}

// RED
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

let sliderRB = document.getElementById("sliderRB");
let rbo = document.getElementById("rbo");
let sliderRBOutput = sliderRB.value / 100
rbo.innerHTML = sliderRB.value
sliderRB.oninput = function() {
  sliderRBOutput = this.value / 100
  rbo.innerHTML = this.value
}

// YELLOW
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

let sliderYB = document.getElementById("sliderYB");
let ybo = document.getElementById("ybo");
let sliderYBOutput = sliderYB.value / 100
ybo.innerHTML = sliderYB.value
sliderYB.oninput = function() {
  sliderYBOutput = this.value / 100
  ybo.innerHTML = this.value
}

// BLUE

let sliderBB = document.getElementById("sliderBB");
let bbo = document.getElementById("bbo");
let sliderBBOutput = sliderBB.value / 100
bbo.innerHTML = sliderBB.value
sliderBB.oninput = function() {
  sliderBBOutput = this.value / 100
  bbo.innerHTML = this.value
}

let sliderBY = document.getElementById("sliderBY");
let byo = document.getElementById("byo");
let sliderBYOutput = sliderBY.value / 100
byo.innerHTML = sliderBY.value
sliderBY.oninput = function() {
  sliderBYOutput = this.value / 100
  byo.innerHTML = this.value
}

let sliderBG = document.getElementById("sliderBG");
let bgo = document.getElementById("bgo");
let sliderBGOutput = sliderBG.value / 100
bgo.innerHTML = sliderBG.value
sliderBG.oninput = function() {
  sliderBGOutput = this.value / 100
  bgo.innerHTML = this.value
}

let sliderBR = document.getElementById("sliderBR");
let bro = document.getElementById("bro");
let sliderBROutput = sliderBR.value / 100
bro.innerHTML = sliderBR.value
sliderBR.oninput = function() {
  sliderBROutput = this.value / 100
  bro.innerHTML = this.value
}

// SPEED

let sliderSpeed = document.getElementById("sliderSpeed");
let speed = document.getElementById("speed-value");
let sliderSpeedOutput = sliderSpeed.value
speed.innerHTML = sliderSpeed.value
sliderSpeed.oninput = function() {
  sliderSpeedOutput = this.value
  speed.innerHTML = this.value
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
  rule( green, blue, sliderGBOutput)

  rule( red, red, sliderRROutput)
  rule( red, green, sliderRGOutput)
  rule( red, yellow, sliderRYOutput)
  rule( red, blue, sliderRBOutput)

  rule( yellow, yellow, sliderYYOutput)
  rule( yellow, green, sliderYGOutput)
  rule( yellow, red, sliderYROutput)
  rule( yellow, blue, sliderYBOutput)

  rule( blue, blue, sliderBBOutput)
  rule( blue, yellow, sliderBYOutput)
  rule( blue, green, sliderBGOutput)
  rule( blue, red, sliderBROutput)

  m.clearRect(0, 0, 1000, 1000)
  draw(0, 0, 'black', 1000)
  for(let i= 0; i < particles.length; i++) {
    draw(particles[i].x, particles[i].y, particles[i].color, 5)
  }
  setTimeout(() => {
    requestAnimationFrame(update)
  }, sliderSpeedOutput);
} 

update()

let buttonRefresh = document.querySelector('.refresh')
buttonRefresh.addEventListener('click', reset) 

let buttonRandom = document.querySelector('.random')
buttonRandom.addEventListener('click', randomParams) 


function randomParams(params) {
  sliderGG.value = randomP()
  sliderGGOutput = sliderGG.value  / 100
  ggo.innerHTML = sliderGG.value

  sliderGR.value = randomP()
  sliderGROutput = sliderGR.value  / 100
  gro.innerHTML = sliderGR.value

  sliderGY.value = randomP()
  sliderGYOutput = sliderGY.value  / 100
  gyo.innerHTML = sliderGY.value

  sliderGB.value = randomP()
  sliderGBOutput = sliderGB.value  / 100
  gbo.innerHTML = sliderGB.value

  // RED

  sliderRR.value = randomP()
  sliderRROutput = sliderRR.value  / 100
  rro.innerHTML = sliderRR.value

  sliderRG.value = randomP()
  sliderRGOutput = sliderRG.value  / 100
  rgo.innerHTML = sliderRG.value

  sliderRY.value = randomP()
  sliderRYOutput = sliderRY.value  / 100
  ryo.innerHTML = sliderRY.value

  sliderRB.value = randomP()
  sliderRBOutput = sliderRB.value  / 100
  rbo.innerHTML = sliderRB.value

  // Yellow

  sliderYY.value = randomP()
  sliderYYOutput = sliderYY.value  / 100
  yyo.innerHTML = sliderYY.value

  sliderYG.value = randomP()
  sliderYGOutput = sliderYG.value  / 100
  ygo.innerHTML = sliderYG.value

  sliderYR.value = randomP()
  sliderYROutput = sliderYR.value  / 100
  yro.innerHTML = sliderYR.value

  sliderYB.value = randomP()
  sliderYBOutput = sliderYB.value  / 100
  ybo.innerHTML = sliderYB.value

  // Blue 

  sliderBB.value = randomP()
  sliderBBOutput = sliderBB.value  / 100
  bbo.innerHTML = sliderBB.value

  sliderBG.value = randomP()
  sliderBGOutput = sliderBG.value  / 100
  bgo.innerHTML = sliderBG.value

  sliderBR.value = randomP()
  sliderBROutput = sliderBR.value  / 100
  bro.innerHTML = sliderBR.value

  sliderBY.value = randomP()
  sliderBYOutput = sliderBY.value  / 100
  byo.innerHTML = sliderBY.value

  reset()
}

function reset(params) {
  m.clearRect(0, 0, 1000, 1000)

  particles = []
   yellow = create(numOfParticles, 'yellow')
   red = create(numOfParticles, 'red')
   green = create(numOfParticles, 'green')
   blue = create(numOfParticles, 'blue')
  // update()
}