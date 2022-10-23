function shoppingList(input) {
    //Get input data
    let shopingPlans = input.shift().split('!');
    let getCommand = input.shift();
    let getCurentComand = getCommand.split(' ')[0];

    while (getCurentComand != 'Go Shopping!') {
        
        let getFirstItems = getCommand.split(' ')[1];
        let getSecondItems = getCommand.split(' ')[2];

        switch (getCurentComand) {
            case 'Urgent':
                if (!shopingPlans.includes(getFirstItems)) {
                    break;
                } else {
                    shopingPlans.unshift(getFirstItems, getSecondItems);
                }

                break;
            case 'Unnecessary':
                if (shopingPlans.includes(getFirstItems)) {

                    let indexCut = shopingPlans.indexOf(getFirstItems);
                    shopingPlans.splice(indexCut, 1);
                }
                if (shopingPlans.includes(getSecondItems)) {

                    let indexCut = shopingPlans.indexOf(getSecondItems);
                    shopingPlans.splice(indexCut, 1);
                }
                break;
            case 'Correct':

                break;
            case 'Rearrange':

                break;

        }
        getCurentComand = getCommand.split(' ')[0];

    }

}

shoppingList(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"]);