$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can help you determine specific x any y values throughout the game
     * Comment the function call out to remove the grid
     */

    drawGrid();

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x, y, width, height);

    createPlatform(100, 500, 200, 30); // a
    createPlatform(200, 700, 200, 30); // b
    createPlatform(400, 650, 200, 30); // c
    createPlatform(500, 521, 200, 30); // d
    createPlatform(600, 400, 200, 30); // e
    createPlatform(600, 114, 200, 30); // f
    createPlatform(900, 150, 200, 30); // g
    createPlatform(950, 400, 50, 200); // h
    createPlatform(1100, 400, 300, 30); // i
    createPlatform(1150, 250, 105, 20); // j
    createPlatform(1350, 340, 50, 20); // k
    createPlatform(300, 200, 30, 30); // L
    // HELLO ORSOOOOOOOON IT"S ME  A GHOST o codemas past. to save press !! Ctrl + s  !!  scaaaaarey stuff  oooooo~~~~
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce);

    createCollectable("database", 600, 200, 0.5, 1.049);
    createCollectable("steve", 700, 100, 0, 0.5); 
    createCollectable("max", 1300, 600, 0);
    createCollectable("kennedi", 200, 475, 0, 0);

    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height);

    createCannon("left", 150, 2000);
    createCannon("bottom", 850, 1400);
    createCannon("right", 640, 2000);

    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
