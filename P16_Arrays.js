//Arraylar ,icerisinde Birden çok öğeyi saklatyabilen yapılar
//Array olustur ma
let meyveler=['Armut','Elma','Portakal','Muz','Çilek','Mangostan']
//2-Dizinin herhengi bir elemanına erişme 
console.log(meyveler[5]);

//Array methods
//push() methodu :Dizinin sonuna bir eleman ekler.
meyveler.push('Kivi','Kayısı','Soğan','Kabak')
console.log(meyveler);
 

// pop() methodu: Dizinin sonundaki elmanı kaldırıyor
let sonEleman=meyveler.pop()
console.log(sonEleman)
console.log(meyveler);

//shift() methodu  dizinin başındaki elemanı kaldırıyor

let ilkEleman=meyveler.shift()
console.log(ilkEleman)
console.log(meyveler)

//unshift() methodu: dizinin başına bir ve ya daha fazla eleman ekler
meyveler.unshift('Domates','Ayva')
console.log(meyveler)

//splice() methodunda belirli bir indexten itibaren öğeleri kaldırır veya ekler
console.log(meyveler);
meyveler.splice(2,4,'Üzüm','Nar','Seftali')  //ilk rakam işlemi yapmaya başlyacağımız index rakamını ifade ederken
                                        //ikinci rakam ise kaç tane öğe'nin silineceğini belirler

console.log(meyveler);                                 

//slice() methodu: bu method dizinin elemanlarını kopyalamaya yarar
let kopyalananOgeler=meyveler.slice(1,4) //1.index dahil 3.index'e kadar olanları kopyaladı
console.log(kopyalananOgeler);


//indexOf() methodu: öğenin index numarasını getirir
console.log(meyveler.indexOf('Nar'));