//переменные
let name = "Нурзада";
const age = 25;
var city = "Алматы";


//типы данных
let text = "Привет"; 
let number = 123;    
let isHappy = true;  
let fruitss = ["яблоко", "банан"];
let userr = { name: "Нурзада", age: 25 };


//условные операторы
if (age >= 18) {
    console.log("Я");
  } else {
    console.log("НеЯ");
  }


  //циклы
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
  
  //функции
  function greet(name) {
    return `Привет, ${name}!`;
  }
  
  console.log(greet("Нурзада")); 
  


  //массивы

let fruits = ["яблоко", "банан", "апельсин"];
fruits.push("виноград"); 
fruits.pop();           

fruits.forEach((fruit) => console.log(fruit));


//обьекты

let user = {
    name: "Нурзада",
    age: 25,
    greet() {
      console.log(`Привет, ${this.name}`);
    },
  };
  
  console.log(user.name); 
  user.greet();           
  


