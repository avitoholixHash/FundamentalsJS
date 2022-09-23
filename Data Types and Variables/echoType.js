function echoType(arg) {

    if (typeof arg === 'string') {

        console.log(typeof arg);
        console.log(arg);

    } else if (typeof arg === 'number') {

        console.log(typeof arg);
        console.log(arg);

    }else{

        console.log(typeof arg);
        console.log('Parameter is not suitable for printing');

    }

}
echoType(null);
