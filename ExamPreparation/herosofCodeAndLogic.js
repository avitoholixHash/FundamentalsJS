function herosofCodeAndLogic(input) {
    //input
    let heroes = {};
    let getLength = Number(input.shift());
    //Get our heroes
    for (let i = 0; i < getLength; i++) {
        let getHeroes = input.shift().split(' ');
        let [name, hitPoints, manaPoints] = getHeroes;

        heroes[name] = {
            hitPoints: Number(hitPoints),
            manaPoints: Number(manaPoints),
        }
    }
    //Get instructions game
    let line = input.shift();

    while (line !== 'End') {
        let instructions = line.split(' - ');
        let command = instructions.shift();

        switch (command) {
            case 'CastSpell':
                {
                    let name = instructions[0]
                    let mana = Number(instructions[1]);
                    let spellName = instructions[2];

                    if (heroes[name].manaPoints < mana) {
                        console.log(`${name} does not have enough MP to cast ${spellName}!`);
                    } else {
                        heroes[name].manaPoints -= mana;
                        console.log(`${name} has successfully cast ${spellName} and now has ${heroes[name].manaPoints} MP!`);
                    }
                    break;
                }
            case 'TakeDamage':
                {
                    let name = instructions[0];
                    let damageOnHP = instructions[1];
                    let attacker = instructions[2];

                    heroes[name].hitPoints -= damageOnHP;

                    if (heroes[name].hitPoints <= 0) {
                        console.log(`${name} has been killed by ${attacker}!`);
                        heroes[name].hitPoints = 0;
                        delete heroes[name];
                    } else {
                        console.log(`${name} was hit for ${damageOnHP} HP by ${attacker} and now has ${heroes[name].hitPoints} HP left!`);
                    }
                }
                break;

            case 'Recharge':
                {
                    let name = instructions[0];
                    let reCargeMana = Number(instructions[1]);
                    let amaountMana = 0;

                    heroes[name].manaPoints += reCargeMana;

                    if (heroes[name].manaPoints > 200) {
                        amaountMana = heroes[name].manaPoints - 200
                        reCargeMana -= amaountMana;
                        heroes[name].manaPoints = 200;
                        
                    }

                    console.log(`${name} recharged for ${reCargeMana} MP!`);
                }
                break;

            case 'Heal':
                {
                    let name = instructions[0];
                    let hitPointsRecovered = Number(instructions[1]);

                    heroes[name].hitPoints += hitPointsRecovered;

                    let amaountHitPoint = 0

                    if(heroes[name].hitPoints > 100){
                        amaountHitPoint = heroes[name].hitPoints - 100;
                        hitPointsRecovered -= amaountHitPoint;
                        heroes[name].hitPoints = 100;
                    }
                    console.log(`${name} healed for ${hitPointsRecovered} HP!`);
                }
                break;

        }

        line = input.shift();
    }

    //Print heroes
    for (const name in heroes) {
        console.log(name);
        console.log(`  HP: ${heroes[name].hitPoints}`);
        console.log(`  MP: ${heroes[name].manaPoints}`);
    }
    // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');


    //console.table(heroes);

}
herosofCodeAndLogic([2,
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'])

    herosofCodeAndLogic([4,
        'Adela 90 150',
        'SirMullich 70 40',
        'Ivor 1 111',
        'Tyris 94 61',
        'Heal - SirMullich - 50',
        'Recharge - Adela - 100',
        'CastSpell - Tyris - 1000 - Fireball',
        'TakeDamage - Tyris - 99 - Fireball',
        'TakeDamage - Ivor - 3 - Mosquito',
        'End'])