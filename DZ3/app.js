Задание 1

const grades = [5, 4, 3, 5, 4, 3, 2, 4, 5, 4];

function getLetterGrade(grade) {
    switch (grade) {
        case 5:
            return 'A';
        case 4:
            return 'B';
        case 3:
            return 'C';
        case 2:
            return 'D';
        case 1:
            return 'E';
        default:
            return 'Invalid grade';
    }
}


const letterGrades = grades.map(getLetterGrade);

console.log("Оценки в буквенном виде:", letterGrades.join(", "));


// Задание 2


const laveshkiSoms = [86000, 172000, 258000];
const laveshkiUs = 86;

const laveshkiSomsInLaveshkiInDollars = [];
for (let i = 0; i < laveshkiSoms.length; i++) {
    const amountInSoms = laveshkiSoms[i];
    const dollars = (amountInSoms / laveshkiUs).toFixed(2);
    console.log(`${amountInSoms} сом = ${dollars}$`);
    laveshkiSomsInLaveshkiInDollars.push(dollars);

}

console.log("Сумма в долларах:", laveshkiSomsInLaveshkiInDollars);


//Задание 3


const innList = ["21212201212345", "11212201212345", "21212201212345", "11212201212345", "11212201212345", "11212201212345", "21212201212345"];

let maleCount = 0;
let femaleCount = 0;

for (let i = 0; i < innList.length; i++) {
    const firstDigit = innList[i][0];
    if (firstDigit === '1') {
        femaleCount++;
    } else if (firstDigit === '2') {
        maleCount++;
    }
}

console.log(`Мужчин: ${maleCount}, Женщин: ${femaleCount}`);










