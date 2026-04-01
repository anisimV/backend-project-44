import runGame from '../index.js'

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".'

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const isEven = (number) => number % 2 === 0

const getRoundData = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no'

  return [String(question), correctAnswer]
}

const runEvenGame = () => {
  runGame(gameDescription, getRoundData)
}

export default runEvenGame
