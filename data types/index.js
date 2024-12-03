//basic string
//ada 3 model string

const pet ='kucing'//single qoute
const eat = "suka makan nasi"//double qoute
const like = `apa aja kucing suka`//backtick
 
console.log(pet)
console.log(eat)
console.log(like)

//concat untuk penggabungan pemanggilan variable menjadi satu 
//concat string
const concatString = pet + eat + like
console.log(concatString)

//concat dengan singgle qoute dan double qoute
const concat = pet + '. '+ eat + ". " + like
console.log(concat)

//concat dengan backtick
const concatBacktick = `${pet} anggora ${eat} dan ikan dan ${like}`
console.log(concatBacktick)

//basic number

const number = 1
const numberString = '0'

console.log (number + numberString)
// setiap ada string maka number ikut menjadi string
