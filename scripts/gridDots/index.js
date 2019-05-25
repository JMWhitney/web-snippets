
(function initBackground() {
  
  //Initialize canvas
  var container = document.getElementById('background');
  var canvas = container.appendChild(document.createElement('canvas'));
  canvas.height = container.clientHeight;
  canvas.width = container.clientWidth;
  ctx = canvas.getContext('2d');
  
  //Point object
  function Point(x,y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
  }


  var grid = []
  var gridWidth = 12;
  var gridHeight = 12;
  var numPoints = gridHeight * gridWidth;

  //Create grid of points
  for(let i = -1; i < 11; i++) {
    for(let j = -1; j < 11; j++) {
      grid.push(new Point(i, j, 0, 0));
    }
  }
  
  
  //draw line
  function drawLine(p1, p2) {
    //Convert from abstract coordinates to canvas coordinates
    var x1 = (p1.x+1) * canvas.width/(gridWidth - 2);
    var y1 = (p1.y+1.5) * canvas.height/(gridHeight - 2);
    var x2 = (p2.x+1) * canvas.width/(gridWidth - 2);
    var y2 = (p2.y+1.5) * canvas.height/(gridHeight - 2);
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  function drawPoint(p) {
    var x = (p.x+1) * canvas.width/(gridWidth - 2);
    var y = (p.y+1.5) * canvas.height/(gridHeight - 2);
    ctx.fillRect(x, y, 5, 5);
  }

  function drawGrid() {
    for(let i = 0; i < numPoints; i++) {
      drawPoint(grid[i]);
      console.log(grid[i])
    } 
  }
  drawGrid();
  
  //Make sure canvas is resized properly
  function resize() {
    canvas.height = container.clientHeight;
    canvas.width = container.clientWidth;
  }
  
  function initAnimation() {
    
    
  }
  
  initAnimation();

  window.addEventListener('resize', resize);
  window.addEventListener('resize', drawGrid);
})();