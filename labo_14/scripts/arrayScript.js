let familie = ["Mama", "Papa", "Emma", "Lucas", "Oma"];

console.log("Aantal elementen in de array:", familie.length);

console.log("Eerste element:", familie[0]);
console.log("Derde element:", familie[2]);
console.log("Vijfde element:", familie[4]);

function voegNaamToe(arr) {
    let extraNaam = prompt("Geef een extra naam:");
    arr.push(extraNaam);
}

voegNaamToe(familie);

console.log("Nieuwe array:", familie);

let familieString = familie.join(", ");
console.log("Array als string:", familieString);