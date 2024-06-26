function solve(house, n, k) {
    if (k > house.reduce((a, b) => a + b, 0)) {
        console.log("-1");
        return;
    }

    let i = 0;
    let j = 0;
    let mn = 123456789;
    let sm = 0;

    while (i < n && j < n) {
        sm += house[j];
        while (sm >= k && i <= j) {
            mn = Math.min(mn, j - i + 1);
            sm -= house[i];
            i += 1;
        }
        j += 1;
    }

    console.log(mn);
}