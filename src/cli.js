import readLineSync from 'readline-Sync'

const cli = () => {
    console.log('Welcome to the Brain Games!')
    const name = readLineSync.question('May I have your name? ')
    console.log(`Hello, ${name}!`);
}

export default cli
