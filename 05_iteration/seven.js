const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const addNum = myNum
                   .map((num) => (num * 10) )
                   .map((addOne) => (addOne + 1))
                   .filter((num) => num > 55);

    console.log(addNum);
    