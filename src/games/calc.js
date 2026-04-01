import runGame from '../index.js'

const gameDescription = 'What is the result of the expression?'

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const getRandomOperator = () => {
  const operators = ['+', '-', '*']
  const randomIndex = getRandomNumber(0, operators.length - 1)
  return operators[randomIndex]
}

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2
    case '-':
      return number1 - number2
    case '*':
      return number1 * number2
    default:
      throw new Error(`Unknown operator: '${operator}'!`)
  }
}

const getRoundData = () => {
  const number1 = getRandomNumber(1, 100)
  const number2 = getRandomNumber(1, 100)
  const operator = getRandomOperator()

  const question = `${number1} ${operator} ${number2}`
  const correctAnswer = String(calculate(number1, number2, operator))

  return [question, correctAnswer]
}

const runCalcGame = () => {
  runGame(gameDescription, getRoundData)
}

export default runCalcGame
