import readlineSync, { question } from 'readline-sync'
import cli from './cli.js'

const roundsCount = 3

const runGame = (gameDescription, getRoundData) => {
    const name = cli()
    console.log(gameDescription)


    for (let i = 0; i < roundsCount; i += 1) {
        const [question, correctAnswer] = getRoundData()

        console.log(`Question: ${question}`)
        const userrAnswer = readlineSync.question('Your answer: ')

        if (userrAnswer !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
            console.log(`Let's try again, ${name}!`)
            return
        }

        console.log('Correct!')
    }

    console.log(`Congratulations, ${name}!`)
}

export default runGame
