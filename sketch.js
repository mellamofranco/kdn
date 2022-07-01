//variables morph **************************************
// Two ArrayLists to store the vertices for two shapes
// This example assumes that each shape will have the same
// number of vertices, i.e. the size of each ArrayList will be the same
let circle1 = [];
let square = [];

// An ArrayList for a third set of vertices, the ones we will be drawing
// in the window
let morph = [];

// This boolean variable will control if we are morphing to a circle or square
let state = false;


function setup() {
  createCanvas(800, 800)

  
  //morph set up **************************************************
  // Create a circle using vectors pointing from center
  for (let angle = 0; angle < 360; angle += 9) {
    // Note we are not starting from 0 in order to match the
    // path of a circle.
    let v = p5.Vector.fromAngle(radians(angle - 135));
    v.mult(100);
    circle1.push(v);
    // Let's fill out morph ArrayList with blank PVectors while we are at it
    morph.push(createVector());
  }

  // A square is a bunch of vertices along straight lines
  // Top of square
  for (let x = -50; x < 50; x += 10) {
    square.push(createVector(x, -50));
  }
  // Right side
  for (let y = -50; y < 50; y += 10) {
    square.push(createVector(50, y));
  }
  // Bottom
  for (let x = 50; x > -50; x -= 10) {
    square.push(createVector(x, 50));
  }
  // Left side
  for (let y = 50; y > -50; y -= 10) {
    square.push(createVector(-50, y));
  }
  
}
//funciones 


function trianguloBase(x, y, tamano, color, rotacion) {

  push()
  fill(color)
  translate(x, y)
  rotate(rotacion)

  let ax = 0
  let ay = -tamano
  let bx = +tamano
  let by = +tamano
  let cx = -tamano
  let cy = +tamano


  triangle(ax, ay, bx, by, cx, cy)
  pop()
}


function trianguloLargo(x, y, tamano, color, rotacion) {

  push()
  fill(color)
  translate(x, y)
  rotate(rotacion)

  let ax = 0
  let ay = -2.5 * tamano
  let bx = +tamano
  let by = +tamano
  let cx = -tamano
  let cy = +tamano


  triangle(ax, ay, bx, by, cx, cy)
  pop()
}




//-----------------------------------------
function draw() {
  


  background(185,182,170)
  

   
  function trianguloBase(x, y, tamano, color, rotacion) {

  push()
  fill(color)
  translate(x, y)
  rotate(rotacion)

  let ax = 0
  let ay = -tamano
  let bx = +tamano
  let by = +tamano
  let cx = -tamano
  let cy = +tamano


  triangle(ax, ay, bx, by, cx, cy)
  pop()
}
  
  
  
function trianguloLargo(x, y, tamano, color, rotacion) {

  push()
  fill(color)
  translate(x, y)
  rotate(rotacion)

  let ax = 0
  let ay = -2.5 * tamano
  let bx = +tamano
  let by = +tamano
  let cx = -tamano
  let cy = +tamano


  triangle(ax, ay, bx, by, cx, cy)
  pop()



}
  
  
  
  //*************************


  //triangulo verde
  let trasX = 180
  let trasY = 100

  fill('green')
  triangle(30 + trasX, 75 + trasY, 58 + trasX, 20 + trasY, 86 + trasX, 75 + trasY)

  //triangulo trasladable
  function trianguloTrasladable(x, y, color, direccion) {
    let trasRX = x
    let trasRY = y

    function trianguloBase(transBaseX, transBaseY) {
      triangle(-28, 55, 0, 0, 28, 55)
    }



    fill(color)

    if (direccion != -1) {

      push()
      rotate(PI)
      trianguloBase()
      triangle(6 + trasRX, 61 + trasRY, 34 + trasRX, 6 + trasRY, 62 + trasRX, 61 + trasRY)
      pop()
    } else {
      rotate(0)
      triangle(6 + trasRX, 61 + trasRY, 34 + trasRX, 6 + trasRY, 62 + trasRX, 61 + trasRY)


    }
  }


  let ax = (height / 3);
  let ay = (width / 2);
  let bx = (50)
  let by = (150)
  let cx = (15)
  let cy = (15)



  //triangulo por pos

  function definirPosTriangulo(a) {
    // posiciones de a pares xy 
    var pos = [width*5/8,450, width*6/7, 350+100, width*6/7, 75];
    return pos[a]
  }





  //triangulo magenta
  fill([255,50,50])
  triangle(definirPosTriangulo(0), definirPosTriangulo(1), definirPosTriangulo(2), definirPosTriangulo(3), definirPosTriangulo(4), definirPosTriangulo(5))




  //posiciones rectangulos
  function definirPos(a) {
    // posiciones de a pares xy 
    var pos = [600,350, 55,100, height * 2 / 3]
    return pos[a]
  }



  let posicion = [height / 2, width / 2]

  //rectangulo
  strokeWeight(4)
  fill(255, 255, 255)
  rect(definirPos(0), definirPos(1), 110, 25.75)


  //ojo
  strokeWeight(4)
  fill(0, 180, 255)
  circle(height / 3, width / 2, 300)
  
  


  //iris movil
  let x2 = map(mouseX, 0, width, width / 3 - 40, height / 3 + 40);
  let y2 = map(mouseY, 0, height, height / 2 - 40, height / 2 + 40);
  fill(0)
  stroke(150);
  ellipse(x2, y2, 80, 80);
  stroke(0);

  //triangulo ojo
  trianguloTrasladable(150, 50, [255, 0, 0, 150], -1)
  
  
  

  //triangulo transparente volador
  trianguloBase(width / 3, 150, 50, [0, 0, 0, 150], PI)
  
  //triangulo ojo arriba
  trianguloBase(width / 3, height*0.4, 100, [0, 0, 0, 150], PI)



  //triangulo largo

  trianguloLargo(width / 3, height / 1.2, 100, [0, 0, 0, 150], 0)
  
  
  function curva (){ 
  push()
  fill([0,0,0,0])
stroke(0);
curve(700,-350, 73+500, 24+150, 73+650, 24+150, 700,-350);
 
    
    
  pop()
  }
  
  curva()

  
  
  

  //mouse
   fill(255, 204, 0);
  strokeWeight(4);
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, 100,100);
  } else {
    rect(mouseX - 50, mouseY - 50, 100, 100);
  }


  //triangulo tronco

  trianguloLargo(width*13/16, height*5/6, 40, [150, 100, 50, 255], PI)

  
//morph***********************

  // We will keep how far the vertices are from their target
  let totalDistance = 0;

  // Look at each vertex
  for (let i = 0; i < circle1.length; i++) {
    let v1;
    // Are we lerping to the circle or square?
    if (state) {
      v1 = circle1[i];
    } else {
      v1 = square[i];
    }
    // Get the vertex we will draw
    let v2 = morph[i];
    // Lerp to the target
    v2.lerp(v1, 0.1);
    // Check how far we are from target
    totalDistance += p5.Vector.dist(v1, v2);
  }

  // If all the vertices are close, switch shape
  if (totalDistance < 0.1) {
    state = !state;
  }

  // Draw relative to center
  translate(width*13/16, height*3/4);
  strokeWeight(4);
  // Draw a polygon that makes up all the vertices
  beginShape();
 fill(30,255,0)
  stroke(0);

  morph.forEach(v => {
    vertex(v.x, v.y);
  });
  endShape(CLOSE);
 

}