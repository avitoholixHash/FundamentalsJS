function concert(input) {

    let libre = {};

    let line = input.shift();
  
    while (line !== 'Start!') {
        let instruction = line.split('; ')
        let command = instruction.shift();

        switch (command) {
            case 'Add':{
                let name = instruction.shift();
                let members = instruction[0].split(', ');

                if(libre.hasOwnProperty(name)){
                    libre[name].members = members.concat(members);
                }else{
                    libre[name] = {
                        members: members,
                        time: 0,
                    }
                }
            
            } 
                break;

                case 'Play':{
                    let name = instruction.shift();
                    let time = Number(instruction.shift());

                    if(libre.hasOwnProperty(name)){
                        libre[name].time += time;
                    }else{
                        libre[name] = {
                            members: [],
                            time: time,
                        }
                    }
                    
                }
                break;
        

        }



        line = input.shift();
    }



    console.table(libre);
}
concert(["Play; The Beatles; 2584",
    "Add; The Beatles; John Lennon, George Harrison, Ringo Starr",
    "Add; The Beatles; Paul McCartney, George Harrison",
    "Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards",
    "Play; The Rolling Stones; 4239",
    "Start!"]);
