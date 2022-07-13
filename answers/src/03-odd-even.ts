const oddEven = (num: number): string => {
  if(num % 2 === 0) return 'Genap'
  return 'Ganjil'
}

console.log(`Input: 43`);
console.log(`Output: ${oddEven(43)}`)

console.log('');

console.log(`Input: 1032`);
console.log(`Output: ${oddEven(1032)}`)