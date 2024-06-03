class person{
    constructor(fullname,age){
        this.fullname=fullname
        this.age=age
    }

    great(){
        return `Merhaba ben ${this.fullname}.`
    }
    getAge(){
        return `Ben ${this.age} yasındayim`
    }

}

//Bu calass'dan bir obje olusturma ve öğelere ulaşma(instance)
const person1=new person('Ahmet',30);

console.log(person1.great());
console.log(person1.getAge());