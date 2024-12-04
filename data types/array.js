/*basic array
array adalah menyimpan nilai apa aja di dalam satu variable
*/

const fruits = ['manggo','strawberry','banana','melon','apple']//array string

const number = [23,50,70,90,100]//string number

const score =[
    [3,5,6,7],
    [4,5,7,9]
]//array of array kalo ini di dalem array ada array 

fruits[0] = 'lemon'//ini cara mengganti nilai pada array

const randomThings = ['fakhri',19]//bad practice karena lebih baik di buat satu tipe data saja

console.log(fruits[1])//ini cara memanggil array
console.log(fruits)//ini cara memanggil array universe/semua
console.log(score[1][3])//ini cara memanggil array of array

//for in dan for of di gunakan untuk perulangan dan melihat susunan data 

for (const element of fruits) {
    console.log(element)
}//for of looping untuk mendapatkan nilai valuenya

for (const key in fruits) {
    console.log(key)     
}//for in looping untuk mendapatakan indeksnya 
//for in juga bisa di buat if else juga untuk iterasi/looping pada data
for (const kunci in number) {
    if (kunci > 3) {
        console.log(kunci)
    }
}
for (const index in fruits) {
   console.log(fruits[index])
}//for in juga bisa mendapatkan valuenya juga dengan cara begini

/*cosnt itu bagus ketika di pake untuk array dan object.
cosnt itu bisa di ubah nilainya tapi berlaku di array dan object
*/