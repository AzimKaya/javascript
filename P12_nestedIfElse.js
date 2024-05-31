//Nested If Else Statement

/*
Soru:
Kullanıcın girdiği sayının negatif/pozitif ve çift/tek sayı olduğunu yazdırın
        Girilen sayı pozitif çift sayıdır
*/

let sayi=-152;

if (sayi>0){
    if(sayi%2===0){
        console.log('Girilen sayi pozitif cift sayidir');
    }else{
        console.log('Girilen sayi pozitif tek sayidir');
    }
    
}else if(sayi<0) {
    if(sayi%2===0){
        console.log('Girilen sayi negatif cift sayidir');   
    }else{
        console.log('Girilen sayi negatif tek sayidir');
    }


}else{

    console.log('Girilen sayi sifirdir');
}
