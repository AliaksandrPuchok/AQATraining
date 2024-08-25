
# AQA training

## 🚀 Обзор

"AQA training" - это учебный проект для начинающих автоматизаторов тестирования, который позволяет попрактиковаться в использовании фреймворка Playwright на языке JavaScript. Проект организован по принципу Page Object Model, что помогает улучшить навыки в тестировании.

## 🛠️ Функции

- Отработка навыков с фреймворком Playwright.
- Написание тестов на языке JavaScript.
- Организация кода с использованием паттерна Page Object Model.
- Интеграция с ESLint для проверки качества кода.

## 📦 Установка

Для установки и запуска проекта выполните следующие шаги:

1. **Клонирование репозитория:**

```bash
git clone https://github.com/AliaksandrPuchok/AQATraining.git
```

2. **Установка зависимостей:**

Убедитесь, что у вас установлен Node.js и Git. Затем выполните:

```bash
npm install
npx playwright install --with-deps
```

3. **Проверка работоспособности:**

Запустите тесты, чтобы убедиться, что всё работает:

```bash
npm run test
```

## 🚀 Использование

В проекте доступны следующие команды:

- `npm run test`: Запуск всех тестов с использованием Playwright.
- `npm run debug`: Запуск тестов в режиме отладки.
- `npm run ui`: Запуск тестов с использованием графического интерфейса Playwright.
- `npm run lint`: Проверка кода с использованием ESLint.
- `npm run lint fix`: Автоматическое исправление ошибок, найденных ESLint.

## 🧪 Тестирование

Проект использует Playwright для написания и запуска тестов. Чтобы запустить тесты, используйте команду `npm run test`.

Структура проекта:

```plaintext
.github/
└── workflows/
    └── playwright.yml

node_modules/

src/
├── components/
├── pageobjects/
│   └── main.page.js
└── utils/
    ├── baseMethods.js
    └── customReporter.js

test-results/

tests/
└── exapmle.spec.js

.gitignore
eslint.config.mjs
package-lock.json
package.json
playwright.config.js
README.md
```

Основные файлы и папки:

- **src/components/**: Содержит компоненты приложения.
- **src/pageobjects/**: Содержит описанные страницы приложения.
- **src/pageobjects/main.page.js**: Пример страницы, организованной по Page Object Model.
- **src/utils/**: Вспомогательные функции, например `baseMethods.js` или `customReporter.js`.
- **src/tests/**: Содержит *spec* файлы - тоесть тестовые сценарии / наборы.
- **tests/exapmle.spec.js**: Пример теста с использованием Playwright.
- **.github/workflows/playwright.yml**: Конфигурация CI для автоматического запуска тестов.

## 📚 Документация

Дополнительная документация и примеры использования доступны на официальном сайте Playwright: [https://playwright.dev](https://playwright.dev).

## 🤝 Руководство к началу работы

Прежде чем приступить, необходимо:

1. Клонируйте репозиторий.
2. Перейдите в собственную ветку (`git checkout aliaksandr`).
3. Создайте от своей ветки дополнительную ветку с названием новой фичи (`git checkout -b amazingFeature`).
4. Внесите необходимые именения в зависимости от задачи.
5. Закоммитьте изменения (git commit -m '${описание коммита}').
6. Запушьте ветку (`git push origin amazingFeature`).
7. Создайте пулл-реквест из вашей новой ветки (например, `amazingFeature`) в вашу основную ветку (например, `aliaksandr`). **Не в `main`!**

### Почему это важно?

Создание пулл-реквеста в вашу личную ветку, а не в `main`, позволяет вам и другим ученикам работать независимо друг от друга. Это гарантирует, что изменения каждого человека не повлияют на работу остальных до тех пор, пока они не будут тщательно проверены и утверждены. Ваша личная ветка служит безопасным пространством для работы над вашими задачами, а `main` остаётся неизменным и доступным для всех как эталонная версия проекта.

Таким образом, каждый ученик может работать с той же исходной базой, а любые изменения, внесённые в проект, будут контролироваться и интегрироваться только после их проверки.

## 📞 Контакты

Связаться с автором проекта можно через:

- **Slack:** через внутреннюю сеть компании.
- **Telegram:** для личных сообщений.

---

_Этот README.md создан для проекта "AQA training". Настройте его под свои нужды и добавьте новые разделы по мере развития проекта._
