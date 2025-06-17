let timer;
let timeLeft = 70; // starts with 70 secs (reset to get 25 mins) 
let isRunning = false;
let isPaused = false;

const timerDisplay = document.getElementById("timer-display");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const stopBtn = document.getElementById("stop-btn");

// Function to update the timer display
function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    // Apply red text and background = black when da time is below 1 minute
    if (timeLeft <= 60) {
        timerDisplay.classList.add("warning");
        document.querySelector(".timer").classList.add("warning-bg");
    } else {
        timerDisplay.classList.remove("warning");
        document.querySelector(".timer").classList.remove("warning-bg");
    }
    
}

// Function to start the timer
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                isRunning = false;
                alert("Time's up- !TAKE A BREAK!");
            }
        }, 1000);
    }
}

// Function to pause the timer and switch button text from pause to resume and vice versa
function pauseTimer() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        isPaused = true;
        pauseBtn.textContent = "Resume"; // Change text to "Resume"
    } else if (isPaused) {
        startTimer(); // Resume the timer
        pauseBtn.textContent = "Pause"; // Change text back to "Pause"
    }
}

// Function to stop the timer (resets to 25:00 mins)
function stopTimer() {
    clearInterval(timer);
    timeLeft = 1500; // Resets to 25 minutes
    updateDisplay();
    isRunning = false;
    isPaused = false;
    pauseBtn.textContent = "Pause"; // Reset pause button text
}

// Add event listeners to buttons
startBtn.addEventListener("click", startTimer); // how the click works
pauseBtn.addEventListener("click", pauseTimer);
stopBtn.addEventListener("click", stopTimer);

// Initialize display
updateDisplay();
