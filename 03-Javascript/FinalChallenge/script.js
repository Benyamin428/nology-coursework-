const isNumberPositive = (number) => {
    if (number >= 0) {
        return true;
    }
    else if (number < 0) {
        return false;
    }
}

console.log(isNumberPositive(-1));
console.log(isNumberPositive(10));

const convertDaysToAge = (days) => {
    const age = days/365;
    return age;
}

console.log(convertDaysToAge(3650));
console.log(convertDaysToAge(6570));

const getLargestNumber = (first, second, third) => {
    let largest = first;
    if (second > largest) {
        largest = second;
    }
    if (third > largest) {
        largest = third;
    }
    return largest;
}

console.log(getLargestNumber(2, 1, 4));
console.log(getLargestNumber(6, 2, 3));

const getLastName = (names) => {
    const length = names.length;
    return names[length-1];
}

console.log(getLastName(['Charlie', 'Rob', 'Andy']));
console.log(getLastName(['Ash', 'Stu']));

const allNumbersPositive = (numbers) => {
    for (let i=0; i<numbers.length; i++) {
        if (numbers[i] < 0) {
            return false;
        }
    }
    return true;
}

console.log(allNumbersPositive([2, 4, 5]));
console.log(allNumbersPositive([-5, 4, 6]));