let arr = [1, 2, 3, 4, 5]

const addTen = (numbers) => {
    let newArr = []
    for(let i = 0; i < numbers.length; i++) {
      newArr.push(numbers[i] + 10)
    }
    return newArr
  }

console.log(addTen(arr))