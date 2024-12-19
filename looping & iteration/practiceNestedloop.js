const array = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

//cara 1
for (const element of array) {
    for (const cuba of element) {
        console.log(cuba);
        
    }
}

//cara 2
for(let i = 0; i < array.length; i++){//untuk mengambil index dalam sub array[1,2,3]
    console.log(array[i]);
   for(let j = 0; j < array[i].length; j++){//untuk mengambil index di dalam kolom array = 1 2 3
    console.log(array[i][j]);
    
   }
}

const words = [
    ['apple','banana','cherry'],
    ['date','elderberry','fig'],
    ['grape','honeydew','kiwi']
]

// Write a nested loop to print each word along with its length.

/* Expected Output:
apple: 5
banana: 6
cherry: 6
date: 4
elderberry: 10
fig: 3
grape: 5
honeydew: 8
kiwi: 4
*/
//menghitung index pada elemen
for(let i = 0; i < words.length; i++){
    for(let j = 0; j < words[i].length;j++){
        const urut = words[i][j].length
        console.log(`${words[i][j]}: ${urut}`);//out put apple: 5
        
    }
}

console.log(words[0][0][0]);//out put:a

// Write a nested loop to print the first letter of each word.

/* Expected Output:
a
b
c
d
e
f
g
h
k
*/
for (const element of words) {
    for (const kakaka of element) {
       console.log(kakaka[0]);//mengambil elemen index awal
       
        
    }
}

// Write a nested loop to print words that contain the letter 'e'.

/* Expected Output:
apple
cherry
elderberry
grape
honeydew
*/
//mencari element yang indexnya lebih dari 4
for (const word of words) {
    for (const element of word) {
        // console.log(`${element}: ${element.length}`);
     if(element.length > 4){
        console.log(element);
        
     }
    }
}

// Write a nested loop to count the number of words containing the letter 'a'.

/* Expected Output:
4
*/
//menghitung jumlah yang mengandung kata 'a'

let totalCharacter = 0;

for (const fruits of words) {
    for (const element of fruits) {
        for (const character of element) {
            if(character === 'a'){   
           totalCharacter++
                
                
            }
        }
    }
}
console.log(totalCharacter);


console.log('______________________');

const totalCharacter1 = words
    .flat() // Menggabungkan semua sub-array
    .join("") // Menggabungkan semua string
    .split("") // Membuat array dari setiap karakter
    .filter(char => char === 'a') // Memfilter huruf 'a'
    .length; // Menghitung panjang array hasil filter

console.log("Total huruf 'a':", totalCharacter1);


// Write a nested loop to print each word in uppercase.

/* Expected Output:
APPLE
BANANA
CHERRY
DATE
ELDERBERRY
FIG
GRAPE
HONEYDEW
KIWI
*/
for (const fruits of words) {
    for (const fruit of fruits) {
      const ppp =fruit.toUpperCase()
      
        console.log(ppp);
        
    }
};

// Write a nested loop to print words that start with a vowel.

/* Expected Output:
apple
elderberry
*/
const vowels = 'aiueo'

//cara 1
for (const word of words) {// loop array
    for (const fruit of word) {//loop index array
        const indexAwal = fruit[0]//mengambil index 0 pada elemen di array
        // console.log(indexAwal);
        let flagging = false;//untuk menandai apakah huruf pertama cocok dengan vokal
        for (const vowel of vowels) {//looping aiueo
            if(indexAwal === vowel){//compare indexawal with vowel
                flagging = true//jika bernilai true maka ada yg sama huruf dan vokal
            }
        }
        if(flagging === true){//mengecek nilai yg di dapat
            console.log(indexAwal);
            
        }
    }
}

//cara 2
for (const word of words) {
    for (const fruit of word) {
        const indexAwal = fruit[0]
        for (const vowel of vowels) {
            if(indexAwal === vowel){
                console.log(fruit);
                
            }
        }
        
    }
}