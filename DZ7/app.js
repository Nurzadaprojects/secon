function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generatePassword() {
    const passwordLength = 4;
    let password = '';

    for (let i = 0; i < passwordLength; i++) {
        password += getRandomInt(0, 9);
    }

    const passwordDisplay = document.getElementById('password');
    passwordDisplay.textContent = password;
}

const button = document.getElementById('generateButton');
button.addEventListener('click', generatePassword);

generatePassword();