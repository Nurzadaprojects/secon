let book = {
    title: "Властелин колец",
    author: "Дж. Р. Р. Толкин",
    year: 1954,
    genre: "Фэнтези",
    rating: 4.9,
    isBestseller: true
};

console.log(book);



let temperature = 10; 
let weatherFeeling;

if (temperature < -20) {
    weatherFeeling = "Мороз";
} else if (temperature >= -20 && temperature < 0) {
    weatherFeeling = "Холод";
} else if (temperature >= 0 && temperature < 15) {
    weatherFeeling = "Прохладно";
} else if (temperature >= 15 && temperature < 28) {
    weatherFeeling = "Тепло";
} else {
    weatherFeeling = "Жарко";
}

console.log(`Температура: ${temperature}°C - ${weatherFeeling}`);
