let count = 0;

const increaseButton = document.getElementById("öka");
const resetButton = document.getElementById("reset");
const display = document.getElementById("count");

increaseButton.addEventListener("click", () => {
    count++;
    display.textContent = count;
});

resetButton.addEventListener("click", () => {
    count= 0;
    display.textContent = + count;
});