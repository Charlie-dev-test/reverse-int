module.exports = function reverse (n) {
    n = Math.abs(n);
    let str = String(n).split("").reverse().join("");
    n = Number(str);
    return n;
}
