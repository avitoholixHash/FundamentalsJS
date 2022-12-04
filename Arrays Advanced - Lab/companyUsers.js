function companyUsers(input) {
    let companyList = {};

    for (const company of input) {
        let [companyName, employeeId] = company.split(' -> ')
        if (!companyList.hasOwnProperty(companyName)) {
            companyList[companyName] = [];
        }
        companyList[companyName].push(employeeId);
    }
    let sorted = Object.entries(companyList).sort((a, b) => a[0].localeCompare(b[0]));

    for (const companyName of sorted) {
        console.log(`${companyName[0]}`);
        console.log(`-- ${companyName[1]}`);
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
])