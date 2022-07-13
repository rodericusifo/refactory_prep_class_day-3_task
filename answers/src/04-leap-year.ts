const leapYear = (year: number): string => {
  if(year % 100 === 0) {
    if(year % 400 === 0) {
      return 'Kabisat'
    } else {
      return 'Bukan kabisat'
    }
  } else {
    if(year % 4 === 0) {
      return 'Kabisat'
    } else {
      return 'Bukan kabisat'
    }
  }
}

console.log(`Input: 1900`);
console.log(`Output: ${leapYear(1900)}`)

console.log('');

console.log(`Input: 2000`);
console.log(`Output: ${leapYear(2000)}`)

console.log('');

console.log(`Input: 2001`);
console.log(`Output: ${leapYear(2001)}`)

console.log('');

console.log(`Input: 2016`);
console.log(`Output: ${leapYear(2016)}`)