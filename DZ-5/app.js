const coinsDisplay = document.getElementById('coins');
const energyDisplay = document.getElementById('energy');
const hamsterButton = document.getElementById('hamsterButton');

let coins = 0;
let energy = 10;

hamsterButton.addEventListener('click', () => {
    if (energy > 0) {
        coins++;
        energy--;
        coinsDisplay.textContent = coins;
        energyDisplay.textContent = energy;

        if (energy === 0) {
            hamsterButton.classList.add('disabled');
            hamsterButton.disabled = true;
        }
    }
});
