
 //1

let name = prompt('Ваше имя');
let age = prompt('Ваш возраст');
let city = prompt('Ваш город');
let phone = prompt('Ваш телефон');
let email = prompt('Ваш емейл');
let company = prompt('Ваша компания');

alert(`Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company}.Мои контактные данные:${company}, ${email}.`);


//2

let birth = 2021 - age;
alert(`${name} родился в ${birth}`);


//3
let num = '123321';
    if ((num[1] + num[2] + num[3]) == (num[4] + num[5] + num[6])) {
    
        console.log('верно')
}
else {
    console.log('неверно')
};

//4 
let a = 1 ;
if (a>0) {
    console.log('верно')
}
else {
    console.log('Неверно')
};

//5
 a=10;
let b = 2;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

let sum=a+b
if (sum>1) {
    console.log(sum**2)
}
else {
    console.log('Неверно')
};

//6
if ( (a > 2 && a < 11) || (b >=6 && b < 14) ) {
    console.log ('верно')
}
else {
    console.log ('неверно')
};





