import runGame from '../index.js'

const gameDescription = 'What number is missing in the progression?'

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const makeProgression = (start, step, length) => {
    const progression = []

    for (let i = 0; i < length; i +=1) {
        progression.push(start + i * step)
    }

    return progression
}

const getRoundData = () => {
    const progressionLength = 10
    const start = getRandomNumber(1, 50)
    const step = getRandomNumber(1, 10)
    const hiddenIndex = getRandomNumber(0, progressionLength - 1)

    const progression = makeProgression(start, step, progressionLength)
    const correctAnswer = String(progression[hiddenIndex])

    progression[hiddenIndex] = '..'

    const question = progression.join(' ')

    return [question, correctAnswer]
}

const runProgressionGame = () => {
    runGame(gameDescription, getRoundData)
}

export default runProgressionGame
