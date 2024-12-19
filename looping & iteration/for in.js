/*
 for in looping yg hanya mereturn indexnya saja
 tapi bisa juga dengan mereturn valuenya juga
 */

const pet = ['cat','dog','tigger','wolf','rabbit']

for (const key in pet) {
   
        console.log(key)
        console.log(pet[key]);//untuk mereturn value
        
    }


 const sports = ['football','basketball','marathon','swimming','thennis']

 for (const index in sports) {
   const number = Number(index) + 1; //untuk memberikan nomer urut
   console.log(`${number}.${sports[index]}`);
 }

