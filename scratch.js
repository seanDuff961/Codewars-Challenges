function solve(data) {
  let frequency = data.reduce((r, e) => {
    if (!r[e]) r[e] = 1;
    else r[e]++;
    return r;
  }, {})

  return [...data].sort((a, b) => {
    return frequency[b] - frequency[a] || a - b
  })
}

console.log(solve([1,2,3,0,5,0,1,6,8,8,6,9,1]));