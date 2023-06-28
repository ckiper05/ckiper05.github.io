/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var positionX = 0; // the location of the x-coordinate
  var positionY = 0; // the location of the y-coordinate
  var speedX = 0; // the speed of the x-axis
  var speedY = 0; // the speed of the y-axis

  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    "LEFT": 37,
    "UP": 38,
    "RIGHT": 39,
    "DOWN": 40
  }
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);   
  $(document).on('keyup', handleKeyUp);                        // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem()
    redrawGameItem()

  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown (event) {
    if (event.which === KEY.LEFT) {
      speedX = -5;
  }
    if (event.which === KEY.RIGHT) {
      speedX = 5;
  }  
    if (event.which === KEY.DOWN) {
      speedY = 5;
  }
    if (event.which === KEY.UP) {
      speedY = -5;
  }


  }
  function handleKeyUp (event) {
    if (event.which === KEY.LEFT) {
      speedX = 0;
  }
    if (event.which === KEY.RIGHT) {
      speedX = 0;
  }  
    if (event.which === KEY.DOWN) {
      speedY = 0;
  }
    if (event.which === KEY.UP) {
      speedY = 0;
  }
  }
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  function repositionGameItem(){
    positionX += speedX
    positionY += speedY
  }

  function redrawGameItem(){
    $("#walker").css("left", positionX)
    $("#walker").css("top", positionY)
  }
}