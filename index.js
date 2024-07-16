class Clade {
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }
}

class Chimera {
    constructor(name, head, body, legs, wings, tail) {
        this.name = name;
        this.head = head;
        this.body = body;
        this.legs = legs;
        this.wings = wings;
        this.tail = tail;
    }
}

var mammal = new Clade("mammal", "🐻");
var bird = new Clade("bird", "🐦");
var reptile = new Clade("reptile", "🦎")
var amphibian = new Clade("amphibian", "🐸");
var fish = new Clade("fish", "🐟");
var invertibrate = new Clade("invertibrate", "🐌");

function randomPart() {
    return options[Math.floor(Math.random() * options.length)].emoji;
}

var options = [mammal, bird, reptile, amphibian, fish, invertibrate];

var chimeraName = prompt("Name the chimera");
var chimera = new Chimera(chimeraName, randomPart(), randomPart(), randomPart(), randomPart(), randomPart(),);

console.log("Name: " + chimera.name);
console.log("Head: " + chimera.head);
console.log("Body: " + chimera.body);
console.log("Legs: " + chimera.legs);
console.log("Tail: " + chimera.tail);
console.log("Wings: " + chimera.wings);