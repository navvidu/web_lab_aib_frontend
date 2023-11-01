
//№2
var fruits = new Array('apple', 'strawberry', 'blueberry', 'raspberry', 'lemon');
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
    switch (fruits[i]) {
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
}
