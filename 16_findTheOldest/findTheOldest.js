const getAge = (birth, death) => {
    if(!death) {
        death = new Date().getFullYear();
        return death - birth;
    }
    return death - birth;
}

const findTheOldest = (people) => {
    return people.reduce((oldest, current) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);

        return currentAge > oldestAge ? current : oldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
