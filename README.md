# Webpack с нуля для React проекта

Настройка Webpack для React проекта полностью с нуля.

## Что настроено

- ✅ Webpack 5
- ✅ TypeScript поддержка с ts-loader
- ✅ HTML Webpack Plugin для автоматической генерации HTML
- ✅ Content hash для кэширования бандлов
- ✅ Автоматическая очистка `dist` папки
- ✅ Resolve extensions для .tsx, .ts, .js
- ✅ Development mode с source maps

## Установка

```bash
npm install
```

## Структура проекта

```
webpack/
├── src/
│   ├── index.ts          # Точка входа
│   └── reactTest.ts      # React компоненты
├── public/
│   └── index.html        # HTML шаблон
├── dist/                 # Собранные файлы
├── webpack.config.ts     # Конфигурация Webpack (TypeScript)
├── tsconfig.json         # Конфигурация TypeScript
└── package.json
```

## TypeScript настройки

### tsconfig.json
- `target: "es5"` - компиляция в ES5 для поддержки старых браузеров
- `jsx: "react"` - поддержка JSX синтаксиса
- `module: "es6"` - использование ES модулей
- `moduleResolution: "node"` - разрешение модулей по алгоритму Node.js
- `esModuleInterop: true` - совместимость с CommonJS модулями

### webpack.config.ts
- **ts-loader** - компилирует TypeScript в JavaScript
- **resolve.extensions** - автоматическое разрешение `.tsx`, `.ts`, `.js` файлов
- **module.rules** - обработка всех `.tsx?` файлов через ts-loader
