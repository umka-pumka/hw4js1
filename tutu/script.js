function aa(bb, cc) {
    for (var i = 0; i < bb.length; i++) {
        if (bb[i] % 2 === 0) {
            cc.push(bb[i]);
        }
    }
}

const array = [1, 2, 2, 3, 4, 55, 45];

const dd = [];

aa(array, dd);

console.log("Исходный массив:", array);
console.log("Четные числа:", dd);