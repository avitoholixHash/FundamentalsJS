function rightPlace(str, char, resultStr){

    let res = str.replace('_', char);
    let output = res === resultStr? 'Matched': 'Not Matched';
    console.log(output); 

}

rightPlace('Str_ng', 'i', 'String');