lines = ["9 4 5 2 3", "1 0", "1 2", "1 3", "1 4", "2 2", "2 3", "2 4", "3 3", "3 4"];
const [n, y, x, p, q] = lines[0].split(" ").map(Number);
let reserved = [];
for (i = 1; i <= lines[0][0]; i++) reserved.push({ x: lines[i].split(" ").map(Number)[0], y: lines[i].split(" ").map(Number)[1] });
let seats = [];
for (j = 0; j < x * y; j++) {
    xAxis = j == 0 ? 0 : j % x == 0 ? xAxis + 1 : xAxis;
    seats = [...seats, { x: xAxis, y: j % x }];
}
noReserved = seats.filter((seat) => !reserved.some((res) => res.x === seat.x && res.y === seat.y));
noReserved.forEach((seat) => {
    seat.diff = Math.abs(p - seat.x) + Math.abs(q - seat.y);
});
noReserved.forEach((seat) => {
    seat.diff = Math.abs(p - seat.x) + Math.abs(q - seat.y);
});
const shortest = Math.min(...noReserved.map((seat) => seat.diff));
const res = noReserved.filter((seat) => seat.diff == shortest);
res.forEach((seat) => console.log(seat.x, seat.y));
// 0 3
// 2 1
// 3 2