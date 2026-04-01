### Hexlet tests and linter status:
[![Actions Status](https://github.com/anisimV/backend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/anisimV/backend-project-44/actions)

[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=anisimV_backend-project-44&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=anisimV_backend-project-44)

---
    Описание проекта
Brain Games — это набор консольных математических игр на JavaScript.
В проект входят игры:
brain-even — проверка, чётное ли число
brain-calc — вычисление арифметического выражения
brain-gcd — поиск наибольшего общего делителя
brain-progression — поиск пропущенного числа в арифметической прогрессии
brain-prime — проверка, является ли число простым
Каждая игра запускается в терминале.  
Игроку нужно дать 3 правильных ответа подряд, чтобы победить.  
При первой ошибке игра завершается.
---
    Минимальные требования
Для запуска проекта необходимо:
Node.js версии 18 и выше
npm (обычно устанавливается вместе с Node.js)
терминал:
PowerShell / CMD на Windows
bash / zsh / WSL на Linux/macOS/Windows
Проверить версии можно так:
---
```bash
node -v
npm -v
```
---
    Установка проекта
1. Клонировать репозиторий
```bash
git clone git@github.com:anisimV/backend-project-44.git
```
2. Перейти в папку проекта
```bash
cd backend-project-44
```
3. Установить зависимости
```bash
npm install
```
4. Подключить исполняемые файлы
```bash
npm link
```
После этого команды `brain-games`, `brain-even`, `brain-calc`, `brain-gcd`, `brain-progression`, `brain-prime` станут доступны в терминале.
---
Запуск игр
Приветствие
```bash
brain-games
```
Проверка на чётность
```bash
brain-even
```
Калькулятор
```bash
brain-calc
```
Наибольший общий делитель
```bash
brain-gcd
```
Арифметическая прогрессия
```bash
brain-progression
```
Простое ли число
```bash
brain-prime
```
---
    Примеры запуска
brain-even
```text
brain-even

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Answer "yes" if the number is even, otherwise answer "no".
Question: 14
Your answer: yes
Correct!
Question: 9
Your answer: no
Correct!
Question: 12
Your answer: yes
Correct!
Congratulations, Sam!
```
brain-calc
```text
brain-calc

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
What is the result of the expression?
Question: 4 + 10
Your answer: 14
Correct!
Question: 25 - 11
Your answer: 14
Correct!
Question: 25 * 7
Your answer: 175
Correct!
Congratulations, Sam!
```
brain-gcd
```text
brain-gcd

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Find the greatest common divisor of given numbers.
Question: 25 50
Your answer: 25
Correct!
Question: 100 52
Your answer: 4
Correct!
Question: 3 9
Your answer: 3
Correct!
Congratulations, Sam!
```
brain-progression
```text
brain-progression

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
What number is missing in the progression?
Question: 5 7 9 11 13 .. 17 19 21 23
Your answer: 15
Correct!
Question: 2 5 8 .. 14 17 20 23 26 29
Your answer: 11
Correct!
Question: 14 19 24 29 34 39 44 49 54 ..
Your answer: 59
Correct!
Congratulations, Sam!
```
brain-prime
```text
brain-prime

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Answer "yes" if given number is prime. Otherwise answer "no".
Question: 7
Your answer: yes
Correct!
Question: 8
Your answer: no
Correct!
Question: 11
Your answer: yes
Correct!
Congratulations, Sam!
```
---
Разработка
Установить зависимости:
```bash
npm install
```
Проверить код линтером:
```bash
make lint
```
или:
```bash
npx eslint .
```
---
Структура проекта
```text
backend-project-44/
├── bin/
│   ├── brain-games.js
│   ├── brain-even.js
│   ├── brain-calc.js
│   ├── brain-gcd.js
│   ├── brain-progression.js
│   └── brain-prime.js
├── src/
│   ├── cli.js
│   ├── index.js
│   └── games/
│       ├── even.js
│       ├── calc.js
│       ├── gcd.js
│       ├── progression.js
│       └── prime.js
├── package.json
├── Makefile
└── README.md
```
---
Используемые технологии
JavaScript (ES Modules)
Node.js
readline-sync
ESLint
---
Автор
Автор проекта: Anisim
GitHub: https://github.com/anisimV?tab=repositories