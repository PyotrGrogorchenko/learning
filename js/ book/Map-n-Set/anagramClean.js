const anagramClean = (arr) => {
  const map = new Set()

  arr.forEach((word) => {
    const sorted = word
      .toLowerCase()
      .split('')
      .sort()
      .join('')
    map.add(sorted, word)
  })

  return Array.from(map.values())
}

console.log(anagramClean(['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares']))
