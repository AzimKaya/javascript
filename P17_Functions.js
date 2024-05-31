// JavaScript Temel Ders Notları: Fonksiyonlar

// 1. Fonksiyon Nedir?
// Fonksiyonlar, belirli bir işlevi gerçekleştirmek için kullanılan 
// bloklar halinde kod parçalarıdır. 
// Yeniden kullanılabilir ve modüler kod yazmamızı sağlarlar.

// 2. Fonksiyonların Oluşturulması:
// Fonksiyonlar "function" anahtar kelimesiyle tanımlanır.
// Genel sözdizimi:
// function functionName(param1, param2, ...) {
//     // Fonksiyonun işlevi
// }

function sayHello(){
    console.log("Herkese merhaba");
}
sayHello();

// 3. Fonksiyonların Çağrılması:
// Tanımlanan fonksiyonlar, gerektiğinde çağrılarak kullanılır.
// Fonksiyonun adı ve parantezler içinde gerekli parametreler belirtilir.

function great(name){

    console.log('Merhaba '+name);

}

great('Azim')

function toplam(a,b){
    return a+b;

}

let sonuc=toplam(3,5)
console.log(sonuc);

console.log(toplam(12,18));

var multiplay=function(x,y){
    return x*y
}

console.log('x*y ='+multiplay(3,9));

//Arrow function

const square=(num)=>{
    return num*num;
}

//Daha syntax
const cube=num=>num**3;

console.log(square(5));//25
console.log(cube(3));//27

//Arrow function(ES6 versiyonundan sonra gecerlidir)

