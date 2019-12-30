function horses(n) {
  if (typeof(n) !== 'number') return undefined;
  if (n < 3) return n;
  let first = n;
  let second = n - 1;
  let third = n - 2;
  return first * second * third;
}

console.log(horses(15));
