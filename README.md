GITHUB PAGES LINK -
https://deezer231.github.io/Pomodoro-Timer/

(set to 70 secs top show difference when less than 1 min (resets to 25 mins))
Lab 1 for CS230

## Objective

- Develop a basic HTML page featuring a paragraph for displaying the timer, two buttons for controlling the timer, and an SVG item representing an apple as the background.
- Utilize CSS to style the page with a background color, green start button, red stop button, and yellow pause button. Additionally, when the timer reaches 1 minute, change the timer text color to red.

## Task Description

The tasks outlined below provide detailed steps and requirements to guide you through completing the assignment.

### Task 1: HTML (Hypertext Markup Language) 

Create a basic HTML file with the layout of a pomodoro timer.

#### Requirements:

- Boilerplate : Implement standard HTML boilerplate code to structure each page, including DOCTYPE, HTML, HEAD, BODY, etc. Ensure a navigation bar is present at the top of every webpage.
- Buttons and Timer : Create a paragraph with the id "timer" to display the timer and add buttons for starting, stopping, and pausing the timer.
- SVG : Use SVG Code to add a picture of a red circle with a green line for the apple.

### Task 2: CSS (Cascading Style Sheets) 

Style the buttons, timer, and page appropriately for the application using CSS.

#### Requirements:

- Boilerplate : Create a styles.css file and link it to the HTML file. Include a style to make the background of the page a light blue and center the pomodoro timer on the page.
- Buttons : Style each button with the Roboto font family, white font color, and green for start, red for stop, and yellow for pause. Apply a black border when hovering over each button.
- Clock : Style the clock with the Orbitron font. When hovered over, the clock should turn yellow; otherwise, it should be white. Additionally, when the timer goes below one minute, change the text color to red and add a background color with rounded corners of 5px to make it stand out from the apple.

### Task 3: JS (JavaScript) 

Implement timer functionality using JavaScript.

#### Requirements:

- Timer : Develop a timer functionality that tracks the time since the start button was pressed. When the timer reaches 0, display an alert to take a break. Pressing the stop button resets the timer, which only starts again when the start button is clicked.
- Pause Button : Implement functionality to pause the timer instead of resetting it. When the pause button is clicked, the text should switch to "Resume", and clicking it again should return to "Pause" while the timer continues running.
