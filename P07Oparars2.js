//Increment

let a=10;
a++;
console.log(a);//11
a+=5;
console.log(a);//16
a*=2;
console.log(a);//32
++a;
console.log(a);//33
console.log(a++);//33 çünkü önce a degerini arttırdı sonra 1arttırdı.Post-Increment
console.log(a);//34 çünkü bir önceki satırda adegeri bir arttırıldı
console.log(++a);//35 önce a adegerini arttırdı sonra yazdırdı Pre -Increment 
console.log(a);//35 bir önceki satırda a degeri bir arttmıştı.


//Decrement
console.log('===========Decrement===============');
let b=20;
console.log(b);//20 Post Decrement
console.log(b--);//20
console.log(b);//19 Pre Decrement
console.log(--b);//18
console.log(b);//18
console.log(b-=2);//16
console.log(b=b-2);//14
console.log(b/=4);//3.
