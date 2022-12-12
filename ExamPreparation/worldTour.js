function worldTour(input){
    let getText = input.shift();

    let line = input.shift();

    let tempArr = [];

    while (line !== 'Travel') {
        
        let instructions = line.split(':');
        let command = instructions.shift();

        switch(command){
            case 'Add Stop':{
                let [index, city] = instructions;
                //console.log(insert(getText, index, city));
                tempArr = getText.split('');
                tempArr.splice(index, 0, city);
                getText = tempArr.join('');
                console.log(getText);
            }
            break;

            case 'Remove Stop':{
                let [startIndex,endIndex] = instructions.map(a => Number(a));
                

                tempArr = getText.split('');
                
                let getLength =tempArr.length;

                if(startIndex < 0 && endIndex > getLength){
                    break;
                }else{
                    let arr = tempArr.slice(startIndex,endIndex + 1 ).join('');
                    getText = getText.replace(arr,'')
                    console.log(getText);
                }

            }
            break;
            case 'Switch':{

            }
            break;
        }

        
        
        line = input.shift();
    }

    function insert(str, index, value) {
        return str.substr(0, index) + value + str.substr(index);
    }
}

worldTour(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"]);