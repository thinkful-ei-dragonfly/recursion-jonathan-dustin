//1. Counting Sheep
function countSheep(num) {
  //Base Case
  if (num === 0) {
    console.log('All sheep jumped over fence')
    return
  }

  console.log(`${num}: Another sheep jump over the fence`)
  countSheep(num - 1)
}

//countSheep(5)

//2. Power Calculator
function powerCalculator(base, exp) {
  //Base Case
  if (exp === 0) {
    return 1
  }
  if (exp < 0) {
    return 'Exponent should be greater than or equal to 0'
  }
  return base * powerCalculator(base, exp - 1)

}

// console.log(powerCalculator(10, 3))
// console.log(powerCalculator(10, 0))
// console.log(powerCalculator(10, -1))

//3. Reverse String
function reverseString(str) {
  //Base Case
  if (str.length === 0) {
    return ''
  }

  const char = str[str.length - 1]
  return char + reverseString(str.slice(0, str.length - 1))
}

// console.log(reverseString('Hello'))
// console.log(reverseString(''))

//4. nth Triangular Number
function triangularNumber(n) {
  //Base Case
  if (n === 0) {
    return 0
  }

  return n + triangularNumber(n - 1)
}

// console.log(triangularNumber(10))
// console.log(triangularNumber(0))
// console.log(triangularNumber(1))

//5. String Splitter

function stringSplit(str, separator) {
  //Base Case
  if (str.length === 0) {
    return ''
  }

  const char = str[0]
  if (char !== separator) {
    return char + stringSplit(str.slice(1), separator)
  }
  return stringSplit(str.slice(1), separator)
}

// console.log(stringSplit('02/20/2020', '/'))
