function main() {
  const input = loadInput();

  const processed = input
    .filter(haveTwoTimeCharsOccurencies);

  const output = processed.join('\n');

  console.log(output);
}

function loadInput() {
  let stdin;
  const input = [];

  while (stdin = readline()) {
    input.push(stdin);
  };

  return input;
}

function haveTwoTimeCharsOccurencies(value) {
  const occurrencies = countCharsTimes(value);

  for (const [, times] of Object.entries(occurrencies)) {
    if (times === 2) {
      return true;
    }
  }

  return false;
}

function countCharsTimes(value) {
  const occurrencies = {};

  value
    .split('')
    .forEach(
      char => {
        const existsChar = occurrencies[char];
        existsChar ? occurrencies[char]++ : occurrencies[char] = 1;
      }
    );

  return occurrencies;
}

main();
