let styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");

let middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Classics";

let firstRemoved = styles.shift();
console.log("Видалений перший елемент:", firstRemoved);

styles.unshift("Rap", "Reggae");

console.log("Поточний масив:", styles);
