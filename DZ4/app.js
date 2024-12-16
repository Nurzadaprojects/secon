//Задание 1
function getPrice(price, discount){
    const discountAmount = (price * discount) / 100;
    return price - discountAmount;
}

console.log(getPrice(1000, 50));


//Задание 2
function capitalizeString(str){
    if (!str) return "";
    return str[0].toUpperCase() + str.slice(1).toLowerCase();

}

console.log(capitalizeString("NURZADA"));
console.log(capitalizeString("hello"));
console.log(capitalizeString("NuRzaDa"));


//Задание 3
function getRatingStars (rating){
    if (typeof rating === "number" && rating >= 1 && rating <= 5 ){
        return "★".repeat(rating);
    }
    return "";
}
console.log(getRatingStars(4));
console.log(getRatingStars(3));
