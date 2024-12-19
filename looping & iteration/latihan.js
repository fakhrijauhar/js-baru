const favoriteFruits = ['apple', 'orange', 'watermelon', 'grape'];
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig' ,'grape', 'honeydew', 'kiwi'];

//cari buah yang sama di kedua array
//print objective yg sama

//for of
for (const fruit of fruits) {
    
    for (const favor of favoriteFruits) {
        
        if(fruit === favor){
            console.log(fruit , 'for of');
            
        }

        
    }
}

//for in (kurang bagus karena ini loop untuk object)
for (const i in fruits) {
    for (const j in favoriteFruits) {
        if( fruits[i] === favoriteFruits[j]){
            console.log(fruits[i], 'for in');
                        
        }
    }
}

//for
for(let i = 0; i < fruits.length; i++){
    for(let j = 0; j < favoriteFruits.length; j++){
        if(fruits[i] === favoriteFruits[j]){
            console.log(fruits[i] , 'for');
            
        }
    }
}