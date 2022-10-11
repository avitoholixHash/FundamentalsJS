function order(products, quantity){

    let sum = 0;

    switch (products) {
        case 'coffee': sum = quantity * 1.5; break;
        case 'water': sum = quantity * 1.00; break;
        case 'coke': sum = quantity * 1.40; break;
        case 'snack': sum = quantity * 2.00; break;
    
        default: 
        console.log('Something wrong...');
            break;
    }

    console.log(sum.toFixed(2));

}