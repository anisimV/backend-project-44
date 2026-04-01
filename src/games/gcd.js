import runGame from '../index.js'

const gameDescription = 'Find the greatest common divisor of given numbers.'

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const getGcd = (number1, number2) => {
  let a = number1
  let b = number2

  while (b !== 0) {
    const remainder = a % b
    a = b
    b = remainder
  }

  return a
}

const getRoundData = () => {
  const number1 = getRandomNumber(1, 100)
  const number2 = getRandomNumber(1, 100)

  const question = `${number1} ${number2}`
  const correctAnswer = String(getGcd(number1, number2))

  return [question, correctAnswer]
}

const runGcdGame = () => {
  runGame(gameDescription, getRoundData)
}

export default runGcdGame
