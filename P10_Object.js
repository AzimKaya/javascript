let ogrenci1={
ad:"Ahmet",
soyadı:"Bulut",
numara:712,
sınıf:'9A'

}

let ogrenci2={
    ad:"Esma",
    soyadı:"Yiğit",
    numara:886,
    sınıf:'9A'
    
    }
// Nesnelere Erişim     
console.log(ogrenci1.ad);
console.log(ogrenci2.soyadı);
console.log(ogrenci1.numara);
console.log(ogrenci1.sınıf);

//Nesnelerin tamamına toplu helde erişmek
console.log("------------------------");
console.log(Object.values(ogrenci2));// Object.values ile objenin degerlerine ulşıyoruz

console.log(Object.keys(ogrenci1));// Object keys ile objenin keylerine uleşıyoruz

console.log(Object.entries(ogrenci1));// Object entries ile objenin key vaşue ikilisine aynı anda uleşıyoruz
console.log(Object.entries(ogrenci2));

delete ogrenci1.sınıf;// delete ile objenin herhengi bir özelliğini siliyoruz.
console.log(Object.values(ogrenci2));
console.log(Object.entries(ogrenci1));

console.log(ogrenci1.hasOwnProperty("sınıf"));//hasOwnProperty ile obje icinde bir ozellik var mi onu kontrol ediyoruz