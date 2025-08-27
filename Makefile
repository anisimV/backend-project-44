# Makefile

# Команда для установки зависимостей через npm ci
install:
	npm install

# Команда для запуска brain-games
brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run