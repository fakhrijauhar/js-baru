/*
nested loop = di dalem loop ada loop lagi
*/

//nested loop for of
const sports = ['football','basketball','marathon','swimming','thennis']

for (const sport of sports) {
    // console.log(sport);//mencari item di variable dan loop
    for (const character of sport) {
        console.log(character);//memisahkan abjad di dalem string
        
    }
}

/*
kesalahan umum ketika make nested loop:
1. for (const character of sports) akan melooping sebanyak 6x6
jadi harus yg di di pake untuk menegeluarkan valuenya(sport)
*/
 
/*
nested loop for
*/
let str = ''//untuk menyimpan deretan bintang sblm di cetak

for(let i = 0 ; i < 5 ; i++){//menghitung jumlah baris
   for(let j = 0;j < 5; j++){//menambahkan jumlah bintang pada baris('*')
    str += '*';//menambakan bintang menjadi(*****)
   } 
    console.log(str);
    str = ''//variable di kosongkan agar diisi ulang bintang setiap loop berikutnya
}

/*
str di riset kembali setelah di cetak
 supaya tidak terjadi penumpukan bintang pada baris
*/

/*
quiz 1
buatkan cetakan berikut ini:
*
**
***
****
*****
memakai looping

*/
let str1 = '*'
for(let i = 0; i < 5; i++){
    console.log(str1);
    str1 +=  '*'
    
}

/*
quiz 2
sebaliknya
*****
****
***
**
*
*/

let yyy = ''

for(let i = 5; i >= 1; i--){
   
    for(let y = 0; y < i; y++){
    yyy += '*'
}
console.log(yyy);
     yyy = ''
}