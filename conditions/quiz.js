/*
Quiz 1:

Use Case:
Compare every fruit prices 1 by 1 and find the cheapest fruit (Use Nested If-Else)
*/

const applePrice = 10000;
const grapePrice = 15000;
const melonPrice = 20000;
const strawberryPrice = 25000;
const avocadoPrice = 30000;

let cheapest = Infinity
let cheapestFruits 

if(avocadoPrice < cheapest){
    cheapest = avocadoPrice
    cheapestFruits = 'avocado'
}
if(strawberryPrice < cheapest){
    cheapest = strawberryPrice
    cheapestFruits = 'strawberry'
}
if(melonPrice < cheapest){
    cheapest = melonPrice
    cheapestFruits = 'melon'
}
if(grapePrice < cheapest){
    cheapest = grapePrice
    cheapestFruits = 'grape'
}
if(applePrice < cheapest){
    cheapest = applePrice
    cheapestFruits = 'apple'
}

console.log(`buah dengan harga yg murah adalah ${cheapestFruits} Rp. ${cheapest}`);


/*
Quiz 2:

Use Case:
Compare the currentDay with targetDay by using ternary. If the condition is
- fulfilled then print 'It's a weekend'
- not fulfilled then print 'It's a weekday'
*/

const targetDay = "Saturday";
const currentDay = "Friday";

const result = (currentDay === targetDay ? 'its weekend' : 'its weekday')

console.log(result);

/*
Quiz 3: The Treasure Hunt (Using "AND")
Story:

You are an adventurous explorer on a quest to find a hidden treasure in an ancient temple. The treasure is located behind a secret door that only opens when two specific conditions are met.

Scenario:

You have a map (hasMap) that shows the location of the secret door.
You have a special key (hasKey) that can unlock the door.
Task:

Write a JavaScript if statement using the "AND" logical operator to check if both conditions are met (you have the map and the key) before the secret door can be opened.

Variables to start:
*/


let hasMap = true;
let hasKey = true;

if(hasMap === true && hasKey === true){
    console.log('anda sudah memenuhi syarat untuk masuk ke pintu rahasia');
    
}else{
    console.log('anda tidak bisa masuk ke pintu rahasia');
    
}

/*
Quiz 4: The Space Mission (Using "OR")
Story:

You are the captain of a spaceship on a mission to explore a distant planet. Your spaceship has two critical systems that must be operational for a successful landing.

Scenario:

The navigation system (navSystem) needs to be functioning.
The communication system (commSystem) needs to be functioning.
Task:

Write a JavaScript if statement using the "OR" logical operator to check if at least one of these systems is operational before attempting to land on the planet.

Variables to start:
*/

const navSystem = true;
const commSystem = true;

if(navSystem === true || commSystem === true){
    console.log('mesin pesawat berfungsi');
    
}else{
    console.log('mesin tidak bekerja');
    
}