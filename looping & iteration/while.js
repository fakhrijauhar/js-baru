/*
while kondisi looping dimana harus false.

common mistakes looping while:
1.kalo tidak false maka looping terus berjalan (error looping)
*/

//remember let biasa di gunakan di while

let x = 0;

while(x <= 10){
    console.log(x);
    x++
}

/*
perbedaan looping for dan while adalah:
1.for: bisa menentukan perulangan selama kondisi bener
2.while: selama konidisi bener maka looping terus berjalan
3.do while: setidaknya jalan sekali operasinya

minus:
1.for: selama kondisi salah maka looping tidak berjalan
2.while: looping terus berjalan kalo tidak false 
*/

let findNumber = true
let number = 0;

while(findNumber){
    console.log(number);
    number++

    if(number === 20){
        findNumber = false
        console.log('number found');
        
    }
    
}
/*
while biasa di gunakan untuk mencari kondisi tertentu
atau menunggu kondisi terpenuhi
 contoh:
 untuk mencari nama dalam array
*/