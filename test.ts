const text: string = "The rain in Spain stays mainly in the plain. In Spain, in April, the rain is a pain.";

// Task 1
const matched: RegExpMatchArray | null = text.match(/spain/ig);
console.log("Task 1: ", matched);

// Task 2
const rainPositions :RegExpMatchArray[] | null = [...text.matchAll(/rain/g)];
rainPositions.forEach(match => console.log(`'rain' found at position: ${match.index}`));

// Task 3
const countryChange: string = text.replace(/spain/i, "France");
console.log("Task 3: ", countryChange);

// Task 4
const airChange: string = text.replace(/rain/gi, 'sun');
console.log("Task 4: ", airChange);

// Task 5
const searchedElement: number = text.search(/plain/);
console.log("Task 5: ", searchedElement);