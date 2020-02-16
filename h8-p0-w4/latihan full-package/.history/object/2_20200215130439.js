//Buatlah sebuah function yang mereturn event terdekat dari parameter date yang diberikan.

function closestEvent(date) {
    var events = [
        { date: '2005-08-23', name: 'Hurricane Katrina' },
        { date: '2004-12-26', name: 'Indian Ocean Earthquake and Tsunami Disaster' },
        { date: '1989-11-09', name: 'Fall of the Berlin Wall' },
        { date: '2009-01-15', name: 'Hudson River Plane Crash' },
        { date: '1986-01-28', name: 'Challenger Spacecraft Explodes' },
        { date: '2001-09-11', name: 'September 11 Attacks' },
        { date: '1986-04-26', name: 'Chernobyl Nuclear Disaster' },
        { date: '2011-03-16', name: 'Fukushima Nuclear Disaster' }
    ];
    // code goes here

}

console.log(closestEvent(new Date(1970, 0, 1)) // 'Challenger Spacecraft Explodes'
console.log(closestEvent(new Date(1986, 2, 13))// 'Challenger Spacecraft Explodes'
console.log(closestEvent(new Date(1986, 2, 14))// 'Chernobyl Nuclear Disaster'
console.log(closestEvent(new Date(1990, 0, 1)) // 'Fall of the Berlin Wall'
console.log(closestEvent(new Date(1995, 9, 11))// 'Fall of the Berlin Wall'
console.log(closestEvent(new Date(1995, 9, 12))// 'September 11 Attacks'
console.log(closestEvent(new Date(2005, 0, 1)) // 'Indian Ocean Earthquake and Tsunami Disaster'
console.log(closestEvent(new Date(2006, 5, 16))// 'Hurricane Katrina'
console.log(closestEvent(new Date(2007, 4, 12))// 'Hudson River Plane Crash'
console.log(closestEvent(new Date()) // 'Fukushima Nuclear Disaster'