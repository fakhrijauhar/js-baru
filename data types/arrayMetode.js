/*
array metode
 disetiap metode ada tanda "()"
*/

//array.push()
//menambahkan elemen di akhir
const fruits = ['banana','apple','alpucado','berry']
fruits.push('manggo')

console.log(fruits)

//array.pop()
//menghilangkan elemen di akhir

fruits.pop()

 console.log(fruits)

 //array.shift()
 //menghilangkan elemen di awal

 fruits.shift()

console.log(fruits)

//array.unshift()
//menambahkan elemen di awal

fruits.unshift('melon')

console.log(fruits)

//array.join()
//menggabungkan elemen dengan koma / space

const join = fruits.join(",")

console.log(join)

//array.trim
const nama = '         fakhri  '

console.log(nama)

const strim = nama.trim()

console.log(strim)

//array.split
//untuk manipulasi string menjadi array biasa berupa teks untuk berbagai keperluan

const karakter = 'saya adalah manusia yang berkuasa'
const split = karakter.split(' ')

console.log(split)

//array.slice
//untuk mengambil bagian tertentu array/teks
const watch = [3,5,7,9,1]

const slice = watch.slice(1,3)//output [5,7] jadi 5 diambil 9,1 di ilangin 
console.log(slice);

const sliceBehind = watch.slice(-2)//ngambil dari urut belakang

//array.splice
//untuk menambahkan / menghapus elemen dari array

const month = ['jan','feb','marth','aprl']

month.splice(3,0,'may')
console.log(month);

/*jadi cara kerja splice bisa menambahkan / mengahpusnya
month.splice(3,0,'may')
yang 3 itu menambahkan mau di index berapa
 yg 0 itu untuk menghapus elemennya jadi kalo 0 berarti ngga ada yg mau di hapus
yang 'may' itu yg mau di masukin ke dalam array
jadinya gini : [ 'jan', 'feb', 'marth', 'may', 'aprl' ]
*/