function formatGrade(grade){

    let description = '';

    if(grade < 3){
        description = 'Fail';
        grade = 2;
    }else if(grade >= 3 && grade < 3.50){
        description = 'Poor'
    }else if(grade >= 4.50 && grade < 4.50){
        description = 'Good';
    }else if(grade >= 4.50 && grade >= 5.50){
        description = 'Very good';
    }else if(grade >= 5.50){
        description = 'Excellent';
    }

    console.log(`${description} (${grade.toFixsed(2)})`);

}

formatGrade(4.5)