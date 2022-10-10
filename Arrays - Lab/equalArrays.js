function equalArrays(arr1, arr2) {

    let sunOfArr = 0;
    

    let arrOne = [];
    let arrSecond = [];

    let curentIndex = 0;

    let areEqual = false;

    for (let i = 0; i < arr1.length; i++) {

        arrOne[i] = Number(arr1[i]);
        arrSecond[i] = Number(arr2[i]);

        if(arrOne[i] === arrSecond[i]){
           
            sunOfArr += arrOne[i];
            areEqual = true;

        }else {
            curentIndex = i;
            areEqual = false;
            break;
        }


    }

    if(areEqual === false){
        console.log(`Arrays are not identical. Found difference at ${curentIndex} index`);
    }else{
        console.log(`Arrays are identical. Sum: ${sunOfArr}`);
    }


}
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);