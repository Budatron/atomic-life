
// import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// const controls = new OrbitControls( camera, renderer.domElement );
// const loader = new GLTFLoader();




 // Set up the scene
 var scene = new THREE.Scene();

 // Set up the camera
 var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
 camera.position.set(55, 55, 55);

 // Set up the renderer with shadows
 var renderer = new THREE.WebGLRenderer();
 renderer.setSize(window.innerWidth, window.innerHeight);
 renderer.shadowMap.enabled = true;
 document.body.appendChild(renderer.domElement);


//  let draw = (x, y, c, s) => {
//   m.fillStyle = c;
//   m.fillRect(x, y, s, s);
// }

let draw = (x, y, p) => {
  p.position.x = x;
  p.position.y = y;
}


let atomsGroups = [];
let ramdomMatrix = [];
let particles = []
let particle = (x, y, c) => {

  var geometry = new THREE.BoxGeometry();
  var material = new THREE.MeshStandardMaterial({ color: c });
  var cube = new THREE.Mesh(geometry, material);
  cube.castShadow = true; // Cubo emite sombras
  scene.add(cube);

  return {'x': x, 'y': y, 'vx': 0, 'vy': 0, 'color': c, 'p': cube}
}

let random = () => {
  return Math.random()*100+5
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
    if(a.x <= 20 || a.x >= 100) { a.vx *= -1}
    if(a.y <= 20 || a.y >= 100) { a.vy *= -1}
  }
}


// let rule = (particles1, particles2, g) => {
//   let a, b, fx, fy;
//   for(let i = 0; i < particles1.length; i++) {
//     fx = 0;
//     fy = 0;
//     for(let j = 0; j < particles2.length; j++) {
//       a = particles1[i];
//       b = particles2[j];

//       let dx = a.x - b.x;
//       let dy = a.y - b.y;

//       let d = Math.sqrt(dx * dx + dy * dy);
      
//       if(d > 0 && d < 80) {
//         let F = g * 1/d;
//         fx += (F * dx)
//         fy += (F * dy)
//       }
//     }
    
//     a.vx = (a.vx + fx) * 0.5
//     a.vy = (a.vy + fy) * 0.5
//     a.x += a.vx;
//     a.y += a.vy;
//     if(a.x <= 200 || a.x >= 800) { a.vx *= -1}
//     if(a.y <= 200 || a.y >= 800) { a.vy *= -1}
//   }
// }


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


 // Create a cube with shadows
 var geometry = new THREE.BoxGeometry();
 var material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
 var cube = new THREE.Mesh(geometry, material);
 cube.castShadow = true; // Cubo emite sombras
 scene.add(cube);

 // Add a ground plane to receive shadows
 var groundGeometry = new THREE.PlaneGeometry(10, 10);
 var groundMaterial = new THREE.ShadowMaterial({ opacity: 0.5 });
 var ground = new THREE.Mesh(groundGeometry, groundMaterial);
 ground.rotation.x = -Math.PI / 2; // Orientación del plano
 ground.position.y = -2; // Altura del plano
 ground.receiveShadow = true; // Plano recibe sombras
 scene.add(ground);

 // Add ambient light
 var ambientLight = new THREE.AmbientLight(0x404040);
 scene.add(ambientLight);

 // Add directional light for shadows
 var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
 directionalLight.position.set(5, 10, 7);
 directionalLight.castShadow = true;
 scene.add(directionalLight);

 // Set up orbit controls
 var controls = new OrbitControls(camera, renderer.domElement);
 controls.enableDamping = true;
 controls.dampingFactor = 0.25;
 controls.screenSpacePanning = false;
 controls.maxPolarAngle = Math.PI / 2;

 // Animation
 var animate = function () {
   requestAnimationFrame(animate);

   // Update orbit controls
   controls.update();

  for(let i = 0; i < atomsGroups.length; i++) {
    for(let j = 0; j < atomsGroups.length; j++) {
        let ppp = Math.random() * 2 - 1; 
        // console.log(ppp);
        rule( atomsGroups[i], atomsGroups[j], ramdomMatrix[i][j])
    }
  }

  for(let i= 0; i < particles.length; i++) {
      draw(particles[i].x, particles[i].y, particles[i].p)
  }

   // Render the scene
   renderer.render(scene, camera);
 };

 // Handle window resize
 window.addEventListener("resize", function () {
   var newWidth = window.innerWidth;
   var newHeight = window.innerHeight;

   camera.aspect = newWidth / newHeight;
   camera.updateProjectionMatrix();

   renderer.setSize(newWidth, newHeight);
 });

 
createParticlesAdvance(4, 400);

createRamdomMatrix();
 // Start the animation loop
 animate();

// // REFERENCIA: https://www.youtube.com/watch?v=0Kx4Y9TVMGg&ab_channel=Brainxyz 
// let m = document.getElementById('life').getContext('2d');
// let draw = (x, y, c, s) => {
//   m.fillStyle = c;
//   m.fillRect(x, y, s, s);
// }


// let atomsGroups = [];
// let ramdomMatrix = [];
// let particles = []
// let particle = (x, y, c) => {
//   return {'x': x, 'y': y, 'vx': 0, 'vy': 0, 'color': c}
// }





// let update = () => {

//   for(let i = 0; i < atomsGroups.length; i++) {
//     for(let j = 0; j < atomsGroups.length; j++) {
//       let ppp = Math.random() * 2 - 1; 
//       console.log(ppp);
//       rule( atomsGroups[i], atomsGroups[j], ramdomMatrix[i][j])
//     }
//   }


//   m.clearRect(0, 0, 1000, 1000)
  
//   draw(0, 0, 'black', 1000)
//   for(let i= 0; i < particles.length; i++) {
//     draw(particles[i].x, particles[i].y, particles[i].color, 5)
//   }
//   setTimeout(() => {
//     requestAnimationFrame(update)
//   }, 40); // Speed entre 10 y 100
// } 



// update()

