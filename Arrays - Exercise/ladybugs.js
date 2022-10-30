function ladybugs(inputArr) {

    let getLengthOnTheFild = inputArr.shift();
    let fullBoxs = inputArr.shift().split(' ');
    let fild = [];
    


    for (let index = 0; index < getLengthOnTheFild; index++) {

        let flyingLine = inputArr.shift().split(' ');
        let from = flyingLine.shift();
        let direction = flyingLine.shift();
        let distance = flyingLine.shift();

        if(direction === 'right'){

            for(let right = from; right < getLengthOnTheFild; right++){
                
                if(distance === fullBoxs[right]){
                    fullBoxs.splice(distance+1,1,1)
                }
            }
        }

    }


}


ladybugs([3, '0 1',
    '0 right 1',
    '2 right 1']);