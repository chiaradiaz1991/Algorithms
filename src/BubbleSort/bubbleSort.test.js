const { bubbleSort } = require('./bubbleSort');

const disorderlist = [22, 4, 1, 9, 7];
const orderlist = [1, 4, 7, 9, 22];

test('bubbleSort function is defined', () => {
    expect(bubbleSort).toBeDefined();
});


test('bubbleSort', () => {
    expect(bubbleSort(disorderlist)).toEqual(orderlist)
});

