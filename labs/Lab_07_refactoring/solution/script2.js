
//№2
const arrayFruits = new Array('apple', 'strawberry', 'blueberry', 'raspberry', 'lemon');
console.log(arrayFruits);
arrayFruits.forEach((fruit)=>{
    switch(fruit){
        case 'apple':
            console.log('apple green');
            break;
        case 'strawberry':
            console.log('strawberry red');
            break;
        case 'blueberry':
            console.log('blueberry blue');
            break;
        case 'raspberry':
            console.log('raspberry light red');
            break;
        case 'lemon':
            console.log('lemon yellow');
            break;
        default:
            console.log('Unknown fruit');
    }
});
