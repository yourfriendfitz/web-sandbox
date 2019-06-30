# HTML5CanvasRandomHsl
An interactive canvas in HTML5 with a randomly generated hsl() value within certain parameters

Users can select from three different color sets:
  red-yellow
  green-light blue
  blue-purple
  
JS is used to generate a random number which is used as the value for the hsl() in ctx.strokeStyle

JS is used to listen for mouse events to draw on the canvas, and to avoid new lines from connecting to old lines drawn by default

HTML inputs are available to select different lineCap and different lineJoin styles, as well as a range input to adjust lineWidth from 15-75.

