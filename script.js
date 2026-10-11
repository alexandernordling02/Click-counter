let count = 0;

const increaseButton = document.getElementById("öka");
const resetButton = document.getElementById("reset");
const saveButton = document.getElementById("save");
const display = document.getElementById("count");
const savesDisplay = document.getElementById("saves");

const savedCount = localStorage.getItem("savedCount");
if (savedCount !== null) {
    savesDisplay.textContent = "Senast sparat: " + savedCount;
}

increaseButton.addEventListener("click", () => {
    count++;
    display.textContent = count;
});

resetButton.addEventListener("click", () => {
    count= 0;
    display.textContent = count;

});

saveButton.addEventListener("click", () => {
    localStorage.setItem("savedCount", count);
    savesDisplay.textContent = "Senast sparat: " + count
})


