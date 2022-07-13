const markScoring = (mark: number): string => {
    if (mark >= 90) return 'A';
    if (mark >= 80 && mark <= 89) return 'B';
    if (mark >= 70 && mark <= 79) return 'C';
    if (mark >= 60 && mark <= 69) return 'D';
    return 'E'
};

console.log(`Input: 30`);
console.log(`Output: ${markScoring(30)}`)

console.log('');

console.log(`Input: 75`);
console.log(`Output: ${markScoring(75)}`)