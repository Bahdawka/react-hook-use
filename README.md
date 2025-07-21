# React Hook Use 

## 🇺🇦 Опис проекту (EN version below)

Цей проект демонструє використання експериментального React хука `use` для обробки Promise-об'єктів. Проект створено з метою показати сучасний підхід до обробки асинхронних даних у React-застосунках.

### Структура проекту:
- `src/components/` - React компоненти
  - `MessageComponents.tsx` - Головний компонент для відображення даних користувачів
  - `ErrorBoundary.tsx` - Компонент для обробки помилок
  - `ErrorFallback.tsx` - Компонент для відображення помилок
- `src/types/` - TypeScript інтерфейси
  - `User.interface.ts` - Інтерфейс для даних користувача
- `src/utils/` - Допоміжні функції
  - `api.ts` - Функції для роботи з API

### Основні особливості:
- Використання експериментального хука `use`
- Типізація за допомогою TypeScript
- Обробка помилок через ErrorBoundary
- Асинхронне завантаження даних
- Оптимізована робота з API

## Початок роботи

```bash
# Встановіть залежності
npm install

# Запустіть сервер розробки
npm run dev
```

## 🇬🇧 Project Description

This project demonstrates the usage of the experimental React `use` hook for handling Promise objects. The project is designed to showcase a modern approach to handling asynchronous data in React applications.

### Project Structure:
- `src/components/` - React components
  - `MessageComponents.tsx` - Main component for displaying user data
  - `ErrorBoundary.tsx` - Error handling component
  - `ErrorFallback.tsx` - Error display component
- `src/types/` - TypeScript interfaces
  - `User.interface.ts` - User data interface
- `src/utils/` - Utility functions
  - `api.ts` - API interaction functions

### Key Features:
- Usage of experimental `use` hook
- TypeScript implementation
- Error handling through ErrorBoundary
- Asynchronous data loading
- Optimized API interactions

### Technologies Used:
- React
- TypeScript
- Axios
- React Error Boundary
- Vite

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```
