function adAstra(input) {
    let items = {};
    
    let getMatch = input.matchAll(/(#{1}|\|{1})(?<items>[A-z ]{1,})\1(?<data>\d+\/\d+\/\d+)\1(?<calaory>\d{1,})\1/gm);

    for (const name of getMatch) {
        items[name.groups.items] = {
            data: name.groups.data,
            calory: Number(name.groups.calaory),
        }
    }
    
    let sumFromCalory = 0;
    for (const key in items) {
        sumFromCalory += items[key].calory;
    }
    let days = Math.floor(sumFromCalory / 2000);
    console.log(`You have food to last you for: ${Number(days)} days!`);

    for (const key in items) {
        console.log(`Item: ${key}, Best before: ${items[key].data}, Nutrition: ${items[key].calory}`);
    }
    
}
adAstra('#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|');
adAstra('$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|')