# Makefile

# Команда для установки зависимостей через npm ci
install:
	npm ci

# Команда для запуска brain-games
brain-games:
	node bin/brain-games.js
