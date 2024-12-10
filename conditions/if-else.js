/*
if-else
*/

const a = 2
const b = '2'
//cara pembuatan if-else
if(a == b){
    console.log('its true');
    
}else{
    console.log('its false');
    
}

//nested if-else
const email = 'aljamshitt@gmail.com'
const password = '12345'

const inputEmail ='aljamshitt@gmail.com'
const inputPassword = '12345'

if(email === inputEmail){
    if(password === inputPassword){
        console.log('succses login')
    }else{
        console.log('invalid password');
        
    }
}else{
    console.log('invalid succses login');
    
}

//if-else operator

//AND && operator 
if(email === inputEmail && password === inputPassword){
    console.log('anda berhasil')
}else{
    console.log('maaf coba lagi');
    
}

//OR || operator if-else
if(1 === 1 || 1===3){
    console.log('its true');
    
}else{
    console.log('its false');
    
}
/*
jadi operator or/|| itu untuk mengembalikan nilai true, 
ketika di antara operandnnya ada yg true maka itu yg di ambil itu truenya

berbeda dengan && jika ada satu yg berbeda make ke hitungannya false,makanya harus 
sama kalo true harus true ngga boleh ada yg beda
*/

//kombisanasi operator && dengan ||

let user = 30

const inputUser = true
const inputAdmin = false

if((user <= 24 && inputUser)  || inputAdmin) {

    console.log('this user');
    
}else{
    console.log('this admin user');
    
}