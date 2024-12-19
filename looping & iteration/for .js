
const sports = ['football','basketball','marathon','swimming','thennis']

//looping dari index depan
for(let z = 0; z < sports.length; z++){
    console.log(sports[z]);
    
}
//looping dari index belakang
for(let i = sports.length -1; i >= 0; i-- ){
    console.log(sports[i]);
    
}
/*
common mistake of looping from behind
1.wajib "-1" karena menghilangkan undefind
2.wajib ">=" jangan "> atau <"
3.wajib "i--" jangan "i++" error looping
*/

//String Accumulation Loop 
let str = ''

for(let i = 0;i < 5; i++){
    str += i
    console.log(str);
    
}
console.log(str);
