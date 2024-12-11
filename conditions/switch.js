const day = 4

switch (day) {
    case 1:
        console.log('senin');
        
        break;
    case 2 :
        console.log('selasa');
        break;
    case 3 :
        console.log('rabu');
        break;
    case 4 :
        console.log('kamis');
        break;
    case 5 :
        console.log('jum at');
        break;
    case 6 :
        console.log('sabtu');
        break;
    case 7 :
        console.log('minggu');
        break;
        
    default:
        console.log('hari tidak di temukan');
        
        break;
}

const remaja = 29;
const dewasa = 40;

switch (true) {
    case remaja < 30:
        console.log('Saya masih remaja');
        break;
    case dewasa > 30:
        console.log('Saya sudah dewasa');
        break;
    default:
        console.log('Nilai tidak sesuai');
        break;
}


const num = 55

switch (true) {
    case num >= 90:
        console.log('plan A');
        break;
    case num >= 60 :
    case num >= 70 :
        console.log('plan B');
        break;
    case num >= 40 :
        console.log('plan C');
        break;
        

    default:
        console.log('not this plan');
        
        break;
}