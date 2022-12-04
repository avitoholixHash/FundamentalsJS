function schoolGrades(input) {
    let schoolDiary = {};
    let result = 0;
    for (const line of input) {
        let studentArr = line.split(' ');
        let name = studentArr.shift();
        let grades = studentArr.map(x => Number(x));

        if (schoolDiary[name]) {
            schoolDiary[name] = schoolDiary[name].concat(grades);
        } else {
            schoolDiary[name] = grades;
        }

        // if(!schoolDiary[name]){
        //     schoolDiary[name] = [];
        // }

        // schoolDiary[name] = schoolDiary[name].concat(grades);

    }

    let studentEntries = Object.entries(schoolDiary);
    let sortStudents = studentEntries.sort((a,b) => a[0].localeCompare(b[0]));

    for (const [name, grades] of sortStudents) {
        let sum = 0;

        for (const grade of grades) {
            sum += grade;
        }

        let average = sum / grades.length;

        console.log(`${name}: ${average.toFixed(2)}`);
    }

}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);