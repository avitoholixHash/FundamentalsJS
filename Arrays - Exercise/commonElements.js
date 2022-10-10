function commonElements(arr1, arr2) {

    let sumOfLengthOnArr = (arr1.length + arr2.length) / 2;

    let matche = '';


    for (let i = 0; i <= sumOfLengthOnArr; i++) {

        for (let j = 0; j < sumOfLengthOnArr; j++) {

            if (arr1[i] === arr2[j]) {

                matche = arr1[i];
                console.log(matche);

            }
        }

    }

}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']);