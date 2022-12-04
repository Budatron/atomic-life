import './style.css'
// REFERENCIA: https://www.youtube.com/watch?v=0Kx4Y9TVMGg&ab_channel=Brainxyz 
let m = document.getElementById('life').getContext('2d');
let draw = (x, y, c, s) => {
  m.fillStyle = c;
  m.fillRect(x, y, s, s);
}

let green, red, yellow, blue;
let particles = []
let particle = (x, y, c) => {
  return {'x': x, 'y': y, 'vx': 0, 'vy': 0, 'color': c}
}

// $("form").submit(function(e){
//   e.preventDefault();
// });

// $("form").submit(function (e) {
//   return false;
// });
$('.title-green').on('click', function (event) {
  if($('.ui-block-a.green-block').hasClass('hide'))$('.ui-block-a.green-block').removeClass('hide')
  else $('.ui-block-a.green-block').addClass('hide')
})

$('.title-red').on('click', function (event) {
  if($('.ui-block-b.red-block').hasClass('hide'))$('.ui-block-b.red-block').removeClass('hide')
  else $('.ui-block-b.red-block').addClass('hide')
})

$('.title-yellow').on('click', function (event) {
  if($('.ui-block-c.yellow-block').hasClass('hide'))$('.ui-block-c.yellow-block').removeClass('hide')
  else $('.ui-block-c.yellow-block').addClass('hide')
})

$('.title-blue').on('click', function (event) {
  if($('.ui-block-d.blue-block').hasClass('hide'))$('.ui-block-d.blue-block').removeClass('hide')
  else $('.ui-block-d.blue-block').addClass('hide')
})

$('.title-gray').on('click', function (event) {
  if($('.ui-block-e.gray-block').hasClass('hide'))$('.ui-block-e.gray-block').removeClass('hide')
  else $('.ui-block-e.gray-block').addClass('hide')
})

$('.save').on('vclick', function(e){
  e.preventDefault();
  // let t = $('#un').val()
  // console.log('click', $('#un').val());
    let pattern = [];
    $('.slider').each(function(i, obj) {
        
        pattern.push($(obj).val())
    });

    let val = $( "#select-custom-1 option:selected" ).val();
    localStorage.setItem(val, JSON.stringify(pattern));

    // var storedNames = JSON.parse(localStorage.getItem("pattern"));
    console.log(val);

    $('#popup-save-screen').addClass('ui-screen-hidden').removeClass('in')
    $('#popup-save-popup').addClass('ui-popup-hidden ui-popup-truncate').removeClass('in ui-popup-active')
  // localStorage.setItem("lastname", JSON.stringify(names));

  // var storedNames = JSON.parse(localStorage.getItem("names"));
})

$('.load').on('vclick', function(e){
  e.preventDefault();
  let val = $( "#select-custom-2 option:selected" ).val();
    // localStorage.setItem(val, JSON.stringify(pattern));

    var storedNames = JSON.parse(localStorage.getItem(val));
    $('.slider').each(function(i, obj) {
        
        // pattern.push($(obj).val())
        $(obj).val(storedNames[i]).slider("refresh");
    });

    $('#popup-load-screen').addClass('ui-screen-hidden').removeClass('in')
    $('#popup-load-popup').addClass('ui-popup-hidden ui-popup-truncate').removeClass('in ui-popup-active')
})


$('#save-open').on('vclick', function(e){
  $('#popup-save-screen').removeClass('ui-screen-hidden').addClass('in')
    $('#popup-save-popup').removeClass('ui-popup-hidden ui-popup-truncate').addClass('in ui-popup-active')
})

$('#load-open').on('vclick', function(e){
  $('#popup-load-screen').removeClass('ui-screen-hidden').addClass('in')
    $('#popup-load-popup').removeClass('ui-popup-hidden ui-popup-truncate').addClass('in ui-popup-active')
})

let random = () => {
  return Math.random()*900+50
}

let randomP = () => {
  return Math.floor(Math.random() * 201) -100
}

let numberP = () => {
  return Math.floor(Math.random() * 700) + 20
}

let randomColor = () => {
  return 360*Math.random();
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


function createParticles() {
  green = create($( "#sliderGP" ).val(),' hsl('+ $("#sliderCG").val() +',100%,50%)')
  red = create($( "#sliderRP" ).val(), 'hsl('+ $("#sliderCR").val() +',100%,50%)')
  yellow = create($( "#sliderYP" ).val(), 'hsl('+ $("#sliderCY").val() +',100%,50%)')
  blue = create($( "#sliderBP" ).val(), 'hsl('+ $("#sliderCB").val() +',100%,50%)')
}


createParticles()

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

// console.log(sliderGGOutput);
  rule( green, green, $("#sliderGG").val() / 100)
  rule( green, red, $("#sliderGR").val() / 100)
  rule( green, yellow, $("#sliderGY").val() / 100)
  rule( green, blue, $("#sliderGB").val() / 100)

  rule( red, red, $("#sliderRR").val() / 100)
  rule( red, green, $("#sliderRG").val() / 100)
  rule( red, yellow, $("#sliderRY").val() / 100)
  rule( red, blue, $("#sliderRB").val() / 100)

  rule( yellow, yellow, $("#sliderYY").val() / 100)
  rule( yellow, green, $("#sliderYG").val() / 100)
  rule( yellow, red, $("#sliderYR").val() / 100)
  rule( yellow, blue, $("#sliderYB").val() / 100)

  rule( blue, blue, $("#sliderBB").val() / 100)
  rule( blue, yellow, $("#sliderBY").val() / 100)
  rule( blue, green, $("#sliderBG").val() / 100)
  rule( blue, red, $("#sliderBR").val() / 100)

  m.clearRect(0, 0, 1000, 1000)
  // draw(0, 0, ' hsl('+ $("#sliderBGC").val() +',100%,'+ $("#sliderBGL").val() +'%)', 1000)
  draw(0, 0, 'black', 1000)
  for(let i= 0; i < particles.length; i++) {
    draw(particles[i].x, particles[i].y, particles[i].color, 5)
  }
  setTimeout(() => {
    requestAnimationFrame(update)
  }, $("#sliderSpeed").val());
} 

update()

let buttonRefresh = document.querySelector('.refresh')
buttonRefresh.addEventListener('click', reset) 

let buttonRandom = document.querySelector('.random')
buttonRandom.addEventListener('click', randomParams) 


function randomParams() {

  let random

  // GREEN 
  if(!$('#all-green').is(':checked')){

    random = randomColor()
    if(!$('#random-colors').is(':checked'))$("#sliderCG").val(random).slider("refresh");

    random = numberP()
    if(!$('#number-particles').is(':checked'))$("#sliderGP").val(random).slider("refresh");
  
    random = randomP()
    $("#sliderGG").val(random).slider("refresh");
  
    random = randomP()
    $("#sliderGR").val(random).slider("refresh");
  
    random = randomP()
    $("#sliderGY").val(random).slider("refresh");
  
    random = randomP()
    $("#sliderGB").val(random).slider("refresh");
  }

  // RED
  if(!$('#all-red').is(':checked')){

      random = randomColor()
      if(!$('#random-colors').is(':checked'))$("#sliderCR").val(random).slider("refresh");

      random = numberP()
      if(!$('#number-particles').is(':checked'))$("#sliderRP").val(random).slider("refresh");

      random = randomP()
      $("#sliderRR").val(random).slider("refresh");

      random = randomP()
      $("#sliderRG").val(random).slider("refresh");

      random = randomP()
      $("#sliderRY").val(random).slider("refresh");

      random = randomP()
      $("#sliderRB").val(random).slider("refresh");
  }

  // Yellow

  if(!$('#all-yellow').is(':checked')){

    random = randomColor()
    if(!$('#random-colors').is(':checked'))$("#sliderCY").val(random).slider("refresh");

    random = numberP()
    if(!$('#number-particles').is(':checked'))$("#sliderYP").val(random).slider("refresh");
  
    random = randomP()
    $("#sliderYY").val(random).slider("refresh");
  
    random = randomP()
    $("#sliderYG").val(random).slider("refresh");
  
    random = randomP()
    $("#sliderYR").val(random).slider("refresh");
  
    random = randomP()
    $("#sliderYB").val(random).slider("refresh");
  }

  // Blue 

  if(!$('#all-blue').is(':checked')){

    random = randomColor()
    if(!$('#random-colors').is(':checked'))$("#sliderCB").val(random).slider("refresh");

    random = numberP()
    if(!$('#number-particles').is(':checked'))$("#sliderBP").val(random).slider("refresh");
  
    random = randomP()
    $("#sliderBB").val(random).slider("refresh");
  
    random = randomP()
    $("#sliderBG").val(random).slider("refresh");
  
    random = randomP()
    $("#sliderBR").val(random).slider("refresh");
  
    random = randomP()
    $("#sliderBY").val(random).slider("refresh");
  }

  reset()
}

function reset(params) {
  m.clearRect(0, 0, 1000, 1000)
// console.log(sliderGPOutput);
  particles = []
  createParticles()
  // update()
}