//Javascripte 5 farklı data türü vardır
/*
1-String:Metinsel
2-Numbers:Sayisal
3-Boolean:Mantıksal
4-Null:
5-Undefind:Tanımlanmamıs

*/

//String
let name1="Esra";
var name2="Elif";

//Number
let age=18 //numbers
let height=155.7; //numbers
let number='25';//Bu durumda 25 string olacaktır.Bu nedenle matematiksel işlemlerde kullanılamaz.

console.log(typeof age) //Typeof konutu degiskenin turunu yazdırır.
console.log(typeof number)

//Boolean
let isHeRetired=false;
console.log(isHeRetired)
console.log(typeof isHeRetired);

//Null
let studentNumber=null;

console.log(studentNumber)
console.log(typeof studentNumber)

//Undefind
let studentId=undefined;
console.log(studentId);
console.log(typeof studentId);

studentId=95;
console.log(studentId);
console.log(typeof studentId);

studentNumber=77143324;
console.log(studentNumber)
console.log(typeof studentNumber)

let firsname="Azim"
var lastname="Kaya"
const idNumbar=23654;

console.log("Adı: "+firsname+'\nSoyadi: '+lastname+'\nYasi: '+age+'+\nTCKN:'+idNumbar)