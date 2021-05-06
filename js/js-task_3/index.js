//1
for (let=i=1; i<=50; i++) {
    console.log(i);
}

for (let=i=35; i>=8; i--) {
    console.log(i);
}

//2
i=89;
while (i>=11) {
   document.write(i + '<br>');
   i--;
} 
 
//3
let=i, sum=0;
for (i=0; i<=100; i++) {
    sum=sum+i;
}
console.log(sum);

//4 
sum=0;
for (i=1; i<=5; i++) {
    sum=sum+i;
    console.log('Сумма'+i+'равно'+sum);
}

//5 
for (let i = 8; i <= 56; i++) {
    if (i % 2 == 0) {
      console.log( i );
    }
};

//6 
for (let j = 2; j <= 10; j++){  
    
    for (let i = 2; i <=10; i++)  
    { 
    document.write(i + "*" + j + "=" +(i*j) + "<br>"); 
    }  
    } 

//7
let n=1000, num=0;
while(true)  {
    if (n>=50){
        n=n/2;
        num++;
    } else {
        break;
    }
}
console.log(n,num);

//8
let num1, avgNum=0;
sum=0;
 i=0;

while (true) {
    num1 = +prompt ('введите число');
    if(isNaN(num1)) {

       alert("Ввведите число");
    }
    else if (num1 == 0) {
        break;
    }
    else {
        sum+=num1;
        i++;
    }
}
console.log("Сумма" + sum + "Среднее" + sum/i);

//9

let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
let arrStr=str.split(" ");
let max=arrStr[0], min=arrStr[0];
for (i=0; i<arrStr.length; i++){
    if (arrStr[i]>max){
        max=arrStr[i]
    }
    if (arrStr[i]<min){
        min=arrStr[i]
    }
}
console.log(`MAX ${max}, MIN ${min}`);

//10
let str1, sum1=0;
 str1 = prompt ('Введите число');
console.log(`число ${str1}`);
str2=str1.split('');
console.log(`разделение ${str2}`);
console.log(`количество чисел ${str1.length}`);
for (i=0; i<str2; i++){sum=sum+str2[i]};
console.log(`сумма ${sum}`);
str3=str2.reverse();
str4=str3.join('');
console.log(`обратно ${str4}`);