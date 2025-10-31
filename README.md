# Webpack с нуля для React проекта

Настройка Webpack для React проекта полностью с нуля с TypeScript и модульной архитектурой конфигурации.

## Что настроено

- ✅ **Webpack 5** - современный бандлер
- ✅ **TypeScript** - полная типизация с ts-loader
- ✅ **Webpack Dev Server** - hot reload, автооткрытие браузера
- ✅ **HTML Webpack Plugin** - автоматическая генерация HTML
- ✅ **Source Maps** - inline-source-map для дебага
- ✅ **Content hash** - кэширование бандлов
- ✅ **Модульная конфигурация** - разделение на loaders, plugins, resolvers
- ✅ **Автоочистка dist** папки
- ✅ **Resolve extensions** - автоматическое разрешение .tsx, .ts, .js

## Установка

```bash
npm install
```

## Запуск

```bash
npm start  # Запуск dev-server на порту 3000
```

## Структура проекта

```
webpack/
├── config/
│   └── build/
│       ├── build-webpack-config.ts  # Главная конфигурация
│       ├── build-loaders.ts         # Настройка загрузчиков (ts-loader)
│       ├── build-plagins.ts         # Плагины (HtmlWebpackPlugin)
│       ├── build-resolvers.ts       # Resolve extensions
│       ├── build-dev-server.ts      # Dev server настройки
│       ├── types.ts                 # TypeScript типы
│       └── index.ts                 # Экспорты
├── src/
│   ├── index.ts                     # Точка входа
│   └── reactTest.ts                 # React компоненты
├── public/
│   └── index.html                   # HTML шаблон
├── dist/                            # Собранные файлы
├── webpack.config.ts                # Конфигурация Webpack (TypeScript)
├── tsconfig.json                    # Конфигурация TypeScript
└── package.json
```

## Архитектура конфигурации

### webpack.config.ts
Главный файл конфигурации, использует модульный подход:
- Импортирует `buildWebpackConfig` из `config/build`
- Передает пути, режим, isDev флаг и порт
- Режим: `development` для разработки

### config/build/
Модульная структура для удобства масштабирования:

#### build-loaders.ts
- **ts-loader** - компилирует TypeScript/TSX в JavaScript
- Исключает `node_modules`

#### build-plagins.ts
- **HtmlWebpackPlugin** - генерирует HTML из шаблона
- **ProgressPlugin** - показывает прогресс сборки

#### build-resolvers.ts
- Автоматическое разрешение расширений `.tsx`, `.ts`, `.js`
- Можно импортировать файлы без указания расширения

#### build-dev-server.ts
- Порт: `3000`
- `open: true` - автоматически открывает браузер

#### types.ts
TypeScript интерфейсы для типизации конфигурации

### tsconfig.json
- `target: "es5"` - компиляция в ES5 для совместимости
- `jsx: "react"` - поддержка JSX
- `module: "es6"` - использование ES модулей
- `moduleResolution: "node"` - Node.js стиль импортов
- `esModuleInterop: true` - совместимость с CommonJS
- Отдельная секция `ts-node` для запуска webpack.config.ts
