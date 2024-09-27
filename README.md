This is a [Next.js](https://nextjs.org) project "Kaban frontend".

## Getting Started

PNPM used:

```
npm install -g pnpm
```

To use pnpm required

```
Set-ExecutionPolicy Unrestricted 
```

Install packages

```
pnpm install
```

Run the development server:

```
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.


## Next js app structure

### Routing:

Используется app routing. Main app: src -> app (route: /)
Далее роутинг идет по директориям. Директория = url

f.e: app = '/' app -> tasks = '/tasks/'

### Constants:

Общие константы для всего проекта

### Config:

Конфиг проекта, например url-конфиг

### API:

Переписанные запросы к API 

### Services:

Бизнес-логика для работы с API

### Hooks:

Кастомные хуки

### Types:

Вынесенные типы и интерфейсы для сущеностей

