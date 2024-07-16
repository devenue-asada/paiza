fee = [
    [0, 1, 3, 4, 22, 34, 60, 63, 85],
    [0, 35, 44, 50, 53, 56, 61, 90, 99],
    [0, 7, 15, 35, 42, 51, 53, 96, 100],
    [0, 23, 40, 41, 44, 64, 67, 83, 91],
    [0, 5, 36, 47, 59, 70, 81, 87, 97],
    [0, 5, 11, 14, 30, 34, 64, 76, 90],
    [0, 4, 5, 22, 57, 62, 90, 91, 98],
    [0, 8, 13, 25, 35, 41, 60, 68, 82],
];
routes = [
    [2, 6],
    [3, 4],
    [6, 1],
    [4, 4],
    [5, 4],
    [8, 6],
    [1, 8],
    [5, 6],
    [4, 6],
    [5, 1],
];
// sum = 259;
prev = 0;
sum = 0;
routes.forEach((_, i) => {
    if (i != 0) prev = i - 1;
    line = routes[i][0] - 1;
    station = routes[i][1] - 1;
    prevStation = routes[prev][1] - 1;

    // 初回は運賃を加算して終了
    if (i == 0) {
        sum += fee[line][station];
        return;
    }
    // 2回目以降の場合で前の駅から移動している場合は差額の運賃を加算
    if (station != prevStation) {
        sum += prevStation > station ? fee[line][prevStation] - fee[line][station] : fee[line][station] - fee[line][prevStation];
    }
});
console.log(sum);

// case1

// case2
// fee = [[0, 2, 7, 10, 13, 33, 74, 76, 82]];
// routes = [
//     [1, 6],
//     [1, 4],
//     [1, 5],
//     [1, 3],
// ];
// sum = 65;
