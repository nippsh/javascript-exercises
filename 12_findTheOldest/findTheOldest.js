const findTheOldest = function(people) {

    let oldestPerson;

    for (person of people){
        if (oldestPerson === undefined){
            oldestPerson = person;
            continue;
        }

        let oldestPersonAge, personAge;
        
        if (oldestPerson.yearOfDeath === undefined){
            oldestPersonAge = new Date().getFullYear() - oldestPerson.yearOfBirth;
        } else {
            oldestPersonAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
        }

        if (person.yearOfDeath === undefined){
            personAge = new Date().getFullYear() - person.yearOfBirth;
        } else {
            personAge = person.yearOfDeath - person.yearOfBirth;
        }

        if (personAge > oldestPersonAge){
            oldestPerson = person;
        }
    }

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
