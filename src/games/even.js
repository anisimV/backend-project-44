import readLineSync from 'readline-sync'

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const isEven = (number) => number % 2 === 0

const runEvenGame = () => {
    console.log('Welcome to the Brain Games!')

    const name = readLineSync.question('May I have your name? ')
    console.log(`Hello, ${name}!`)

    console.log('Answer "yes" if the number is even, otherwise answer "no".')

    let correctAnswersCount = 0

    while (correctAnswersCount < 3) {
        const question = getRandomNumber(1, 100)
        console.log(`Question:  ${question}`)

        const userAnswer = readLineSync.question('Your answer: ')
        const correctAnswer = isEven(question) ? 'yes' : 'no'

        if (userAnswer !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
            console.log(`Let's try again, ${name}!`)
            return
        }

        console.log('Correct!')
        correctAnswersCount += 1

    }

        console.log(`Congratulations, ${name}!`);
}

export default runEvenGame