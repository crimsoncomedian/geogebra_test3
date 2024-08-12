let blueValue = 0;
let redValue = 0;

const blueArrow = document.getElementById('blueArrow');
const redArrow = document.getElementById('redArrow');
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const totalText = document.getElementById('totalText');

blueArrow.addEventListener('click', () => {
    blueValue++;
    updateDisplay();
});

redArrow.addEventListener('click', () => {
    redValue--;
    updateDisplay();
});

function updateDisplay() {
    text1.innerText = blueValue;
    text2.innerText = redValue;
    totalText.innerText = `= ${blueValue + redValue}`;
}

// Initialize the display
updateDisplay();
