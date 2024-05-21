/*
Data casting (veri dönüstürme) isleminde 
bir veri türünün baska bir veri türüne dönüstürme islemidir.
Bu islem genellikle datalari kullanım senaryosuna uygun hale getirmek icin yapılır.

*/
//String'den number'a
let str='123';
let num=Number(str);
console.log(str)
console.log('typeof str: '+typeof str)
console.log(num)
console.log('typeof num: '+typeof num)

console.log('---------------------')

//Number to string
let str2=String(num);
console.log(str2)
console.log('typeof str2: '+typeof str2)

//String to Boolean
let str3='true';
let bool1=Boolean(str3)
console.log(bool1)
console.log('typeof str2: '+typeof bool1)

//Number to  Boolean
let name1=212;
let bool2=Boolean(name1);
console.log(bool2)
//javascrip'te bir sayinin degeri sifir veya not a number (NaN) ise boolen'a cast edilirse false döndürür.
// Eger sifirdan farklı bir sayi atanırsa  bu sefer bize true döndürür.

//Boolean to Number 

let bool3=true;
let num2=Number(bool3);
console.log(num2);//true ise 1 false ise 0 döndürür
