//1
let str='aaa@bbb@ccc';
console.log(str.replace(/@/g, '!'));

//2
let a ='2025-12-31';
let b = a.split('-');
let newA = b[2] + '/' + b[1] + '/'+b[0];
console.log(newA);

//3
let c = 'Я учу javascript!';
console.log(c.substr(2,3));
console.log(c.substring(2,5));
console.log(c.slice(2,5));

//4
let d ='4, 2, 5, 19, 13, 0, 10';
let sum=0;
for (i = 0; i < d.length; i++) {
    sum =sum + Math.pow(d[i],3);
    }
    console.log('Сумма кубов элементов заданного массмва' + sum);
    console.log('Квадратный корень'+ Math.sqrt(sum));

//5

let k=3, l=6;
m=k-l;
console.log(m);

//6
