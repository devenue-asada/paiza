arr = [
    ["#", "#", "#", "#", "."],
    ["#", ".", "#", "#", "#"],
    ["#", "#", "#", ".", "#"],
    ["#", ".", "#", "#", "#"],
    ["#", "#", "#", ".", "#"],
];
sharp = "#";
dot = ".";
last = arr.length - 1;
donutsCount = 0;
arr.forEach((v, row) => {
    v.forEach((vv, col) => {
        console.log(vv, row, col);
        // 配列の最初最後、端以外のドットの場合進む
        if (row == 0 || row == last || col == 0 || col == last || vv == sharp) return;

        // 周り8マスが#ならドーナツ
        isDonuts =
            arr[row - 1][col - 1] == sharp &&
            arr[row - 1][col] == sharp &&
            arr[row - 1][col + 1] == sharp &&
            arr[row][col - 1] == sharp &&
            arr[row][col + 1] == sharp &&
            arr[row + 1][col - 1] == sharp &&
            arr[row + 1][col] == sharp &&
            arr[row + 1][col + 1] == sharp;
        if (isDonuts) donutsCount++;
    });
});
