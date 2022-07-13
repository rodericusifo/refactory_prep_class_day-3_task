const filmRating = (age: number) => {
    if (age >= 21) return 'Dewasa';
    if (age >= 13 && age <= 20) return 'Remaja';
    if (age >= 9 && age <= 12) return 'Bimbingan Orang Tua';
    return 'Semua Usia';
};

console.log(`Input: 15`);
console.log(`Output: ${filmRating(15)}`)

console.log('');

console.log(`Input: 32`);
console.log(`Output: ${filmRating(32)}`)