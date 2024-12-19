const paragraphs = [
    ['The quick brown fox', 'jumps over the lazy dog'],
    ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit'],
    ['Sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua']
  ];
//cara 1
  let flatten = []

  for (const element of paragraphs) {
    for (const paragraph of element) {
         flatten = flatten.concat(paragraph.split(' '))
        
        
    }
  }
  console.log(flatten);
  console.log(flatten.length);
  
  //cara 2 spread operator (...)
const flattenPharagraph = []

  for (const element of paragraphs) {
    for (const sentence of element) {
        const words = sentence.split(' ')
       flattenPharagraph.push( ...words)
        
    }
  }
  console.log(flattenPharagraph);
  console.log(flattenPharagraph.length);
  
  //cara 3
  const flattenParagraph = [];

for (const paragraph of paragraphs) {
  for (const sentence of paragraph) {
    const words = sentence.split(' ');
    for (const word of words) {
      flattenParagraph.push(word);
    }
  }
}
console.log(flattenParagraph);
console.log(flattenParagraph.length);



  // Write a nested loop to flatten the paragraphs array into a single array of words and print the total word count.

/* Expected Output:
Total word count: 28
*/
console.log('___________________');


const salesData = [
    [120.50, 89.70, 45.60],
    [150.00, 130.20, 75.50],
    [200.10, 95.40, 180.60]
  ];

 

  for(let i = 0; i < salesData.length; i++){
    // console.log(`total sales for day${i + 1} : 255.80`);
     let count = 0;
  for(let j = 0; j < salesData[i].length; j++){
    count += salesData[i][j]
    
  }
  console.log(`total sales for day${i + 1}: ${count.toFixed(2)}`);
  
  }
  // Write a nested loop to calculate and print the total sales for each day.

/* Expected Output:
Total sales for day 1: 255.80
Total sales for day 2: 355.70
Total sales for day 3: 476.10
*/

console.log('_____________________');


const sentencesArray = [
  ['The quick brown fox', 'jumps over the lazy dog'],
  ['The quick brown fox', 'is quick and agile'],
  ['A quick fox is hard to catch', 'but a lazy dog is easy']
];

let totalQuick = 0;

for (const element of sentencesArray) {
  for (const sentences of element) {
    const word = sentences.split(' ')
    for (const words of word) {
      if(words === 'quick'){
        totalQuick++
      }
      
    }
    
  }
}
console.log(totalQuick);


// Write a nested loop to count and print the number of times the word 'quick' appears in the sentences array.

/* Expected Output:
The word 'quick' appears 4 times.
*/


const fruitGroups = [
  ['apple', 'banana', 'cherry'],
  ['date', 'elderberry', 'fig'],
  ['grape', 'honeydew', 'kiwi']
];
const targetFruits = ['banana', 'fig', 'kiwi', 'mango'];

for(let i = 0; i < fruitGroups.length; i++ ){
  for( let j = 0; j < fruitGroups[i].length; j++){
    const fruit = fruitGroups[i][j]
   
    if(!targetFruits.includes(fruit)){
      console.log(fruit);
      
    }
    
  }
}

// Write a nested loop to find and print elements in fruitGroups that are not in targetFruits.

/* Expected Output:
apple
cherry
date
elderberry
grape
honeydew
*/

const socialPosts = [
  ['Loving the new #feature', '#excited for the update'],
  ['Had a great time at the #conference', 'Met some amazing people #networking'],
  ['#Throwback to the best vacation ever', 'Missing the #beach life']
];

for (const socialPost of socialPosts) {
  for (const post of socialPost) {
    const words = post.split(' ');
    
    for (const word of words) {
      if (word.startsWith('#')) {
        console.log(word);
      }
    }
  }
}

// Write a nested loop to extract and print all hashtags from the socialPosts array.

/* Expected Output:
#feature
#excited
#conference
#networking
#Throwback
#beach
*/
console.log('______________________');


const petGroups = [
  ['cat', 'dog', 'bird'],
  ['fish', 'lizard', 'hamster'],
  ['horse', 'turtle', 'rabbit']
];
const targetPets = ['dog', 'fish', 'rabbit', 'snake'];


// Ver 1
const newPetGroups = [];

for (const petGroup of petGroups) {
  const newPetGroup = [];
  for (const pet of petGroup) {
    if (targetPets.includes(pet)) {
      newPetGroup.push('REPLACED');
    } else {
      newPetGroup.push(pet);
    }
  }
  newPetGroups.push(newPetGroup);
}

console.log(newPetGroups);

// Ver 2
for (let i = 0; i < petGroups.length; i++) {
  for (let j = 0; j < petGroups[i].length; j++) {
    if (targetPets.includes(petGroups[i][j])) {
      petGroups[i][j] = 'REPLACED';
    }
  }
}
console.log(petGroups);



// Write a nested loop to replace matching elements in nestedArray with 'REPLACED' and print the updated nestedArray.

/* Expected Output:
[
  ['cat', 'REPLACED', 'bird'],
  ['REPLACED', 'lizard', 'hamster'],
  ['horse', 'turtle', 'REPLACED']
]
*/

const fruitBaskets = [
  ['apple', 'banana', 'cherry'],
  ['date', 'elderberry', 'fig'],
  ['grape', 'honeydew', 'kiwi']
];
const exoticFruits = ['apricot', 'blueberry', 'citrus', 'dragonfruit'];

//cara 1
for(let i = 0; i < fruitBaskets.length; i++){
  for (const element of fruitBaskets[i]) {
    
    for(let k = 0; k < exoticFruits.length;k++){
      const exotic = exoticFruits[k][0]
      
      if(element[0] === exotic[0]){
        console.log(element);
        
      }
    }
  }
}


//cara 2

for (const exotic of exoticFruits) {
for (const element of fruitBaskets) {
  for (const fruit of element) {
    if(fruit.startsWith(exotic[0])){
      console.log(fruit);
      
    }
  }
}
}
// Write a nested loop to find and print elements in nestedArray that start with the same letter as any element in compareArray.

/* Expected Output:
apple
banana
cherry
date
*/