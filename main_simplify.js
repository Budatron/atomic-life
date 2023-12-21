import './style.css'
// REFERENCIA: https://www.youtube.com/watch?v=0Kx4Y9TVMGg&ab_channel=Brainxyz 
let m = document.getElementById('life').getContext('2d');
let draw = (x, y, c, s) => {
  m.fillStyle = c;
  m.fillRect(x, y, s, s);
}


let atomsGroups = [];
let ramdomMatrix = [];
let particles = []
let particle = (x, y, c) => {
  return {'x': x, 'y': y, 'vx': 0, 'vy': 0, 'color': c}
}



let random = () => {
  return Math.random()*900+50
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



function createParticlesAdvance(atomos, numero_atomos) {

  let colorPalet = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FFF000', '#FF00FF', '#00FFFF']
  
  for(let i = 0; i < atomos; i++) {
    atomsGroups.push( create(numero_atomos, colorPalet[i]) )
  }

}

function createRamdomMatrix() {
  for(let i = 0; i < atomsGroups.length; i++) {
    ramdomMatrix[i] = [];
    for(let j = 0; j < atomsGroups.length; j++) {
      ramdomMatrix[i][j] = (Math.random() * 2 - 1); 
    }
  }
}


let update = () => {

  for(let i = 0; i < atomsGroups.length; i++) {
    for(let j = 0; j < atomsGroups.length; j++) {
      let ppp = Math.random() * 2 - 1; 
      console.log(ppp);
      rule( atomsGroups[i], atomsGroups[j], ramdomMatrix[i][j])
    }
  }


  m.clearRect(0, 0, 1000, 1000)
  // draw(0, 0, ' hsl('+ $("#sliderBGC").val() +',100%,'+ $("#sliderBGL").val() +'%)', 1000)
  draw(0, 0, 'black', 1000)
  for(let i= 0; i < particles.length; i++) {
    draw(particles[i].x, particles[i].y, particles[i].color, 3)
  }
  setTimeout(() => {
    requestAnimationFrame(update)
  }, 40); // Speed entre 10 y 100
} 


createParticlesAdvance(4, 400);

createRamdomMatrix();

update()

