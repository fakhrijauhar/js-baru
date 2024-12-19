/*
get the total price by using looping/iterations

*/

const groceries = [15000, 30000, 50000, 100000, 500000];
let totalPriceForOf = 0;

for (const grocery of groceries) {
  totalPriceForOf = totalPriceForOf + grocery;
  // totalPriceForOf += grocery;
}

console.log(totalPriceForOf, 'For Of');

// 2. For
let totalPriceFor = 0;

for (let i = 0; i < groceries.length; i++) {
  const grocery = groceries[i];
  totalPriceFor += grocery;
}

console.log(totalPriceFor, 'For');

// 3. For In
let totalPriceForIn = 0;

for (const i in groceries) {
  totalPriceForIn += groceries[i];
}

console.log(totalPriceForIn, 'For In');

/*
Quiz 2: Looping + Condition

Find the correct key to open the Golden Door by using looping and condition (if-else);
- If the key has been found, print: "You have opened the door".
- If the key is not found, print: "You don't have the right key"
*/

const requiredKey = 'white Key'; // 'White Key'
const keys = ['Red Key', 'Blue Key', 'Green Key', 'Golden Key', 'Yellow Key', 'Black Key'];

let keyFound = false//flagging = true or false
/*
flagging di gunakan untuk memberhentikan
*/
for(let i = 0; i < keys.length; i++){
    const key = keys[i]

    if(key === requiredKey){
        keyFound = true
         console.log('You have opened the door');
         break;
    } 
       
    }
           
      if(keyFound === false){
      } else{
        console.log("You don't have the right key");
        
      }
    
     // Kumpulan kunci tersedia
const keys2 = ["silver", "bronze", "gold", "iron", "wood"];

// Kunci yang benar untuk membuka pintu
const goldenKey = "gold";

// Variabel untuk menandai apakah kunci ditemukan
let keyFound1 = false;

// Looping untuk memeriksa setiap kunci
for (let i = 0; i < keys2.length; i++) {
    if (keys[i] === goldenKey) {
        keyFound1 = true;
        break; // Berhenti saat kunci ditemukan
    }
}

// Kondisi berdasarkan hasil pencarian kunci
if (keyFound1) {
    console.log("You have opened the door");
} else {
    console.log("You don't have the right key");
}

/*
cara ke 2 menggunakan while
*/

const bukaKunci = ' rumah'
const kunci = ['kunci rumah','kunci hati','kunci motor','kunco mobil']

//variable untuk menandai apakah kunci di temukan
let temukanKunci = false

//variable untuk perulangan
let i = 0;
//looping untuk memeriksa kunci 
while(i < kunci.length){
  //if untuk membandingkan apakah sama antara kunci dan bukakunci
  if(kunci[i] === bukaKunci){
   console.log(kunci[i]);
   
    temukanKunci = true //untuk menandai kunci sudah benar dengan bukaKunci
    break; //untuk stop
  }
  
  i++
}

if(temukanKunci === true){
console.log('kunci di temukan');

}else{
  console.log('kunci tidak di temukan');
  
}

