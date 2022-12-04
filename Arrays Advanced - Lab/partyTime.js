function partyTime(input) {
    let isVip = [];
    let isNormal = [];

    let getGuest = input.shift();

    while (getGuest !== 'PARTY') {
        let getVip = isNaN(getGuest[0]);
        if (getVip) {
            isNormal.push(getGuest);
        } else {
            isVip.push(getGuest);
        }
        getGuest = input.shift();
    }
    let allGuest = isVip.concat(isNormal);

    for (const guest of input) {
        allGuest.splice(allGuest.indexOf(guest), 1);
    }

    console.log(allGuest.length);
    allGuest.forEach(guest => console.log(guest));


}
partyTime([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])