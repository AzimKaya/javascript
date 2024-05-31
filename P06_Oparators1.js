//Atama oparatörü
// =yazılınca bu opğaratör eşitlik olayına bakmaz .Sadece x 158 degerini atamak için kullanılır.
let x=185;

//Mantıksal oparatörler 
let a=5;
let b='5';

console.log('a nın data türü: '+typeof a);
console.log('b nın data türü: '+typeof b);

//Eşitlik oparatörü ==
console.log(a==b);//== sadece deger kontrolü yapar .Tipine bakmaz -true
//Mutlak eşitlik oparatörü ===
console.log(a===b);//=== deger ve data tipi kontrolü yapar -false

let c=12;
let d=28;
let e=12;
let f='32';

console.log(c<d)//true
console.log(e>=c)//true
console.log(e>d)//false

//Eşit değil Oparatörü

console.log(c!=d);//True
console.log('----------------------------')
console.log(c!=e);//false
console.log(c!==e);//false

console.log('----------------------------')
console.log(c!=f);//false
console.log(c!==f);//false


