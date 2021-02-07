const number = [1, 2, 3, 4, 5, 6]
for (let i = 0; i < number.length; i++) {
    let result = number[i] * number[i]
    if (number[i] > 4) {
        break
    }
    console.log(number[i]);
}