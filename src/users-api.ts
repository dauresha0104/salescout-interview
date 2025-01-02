// Create an API using Node.js and Express:
// 1. POST /user - adds a user.
// 2. GET /users - returns all users.

// Use Express library

import express, { Request, Response } from 'express';
const app = express();

// Middleware для обработки JSON тела запроса
app.use(express.json());

// Массив для хранения пользователей
const users: { name: string }[] = [];

// Маршрут для добавления пользователя
app.post('/user', (req: Request, res: Response) => {
    const { name } = req.body;
    
    // Проверка, что имя пользователя передано
    if (!name) {
        return res.status(400).send('Name is required');
    }

    // Добавляем пользователя в массив
    users.push({ name });

    // Ответ с подтверждением добавления
    res.status(201).send('User added');
});

// Маршрут для получения всех пользователей
app.get('/users', (req: Request, res: Response) => {
    res.status(200).json(users);
});

// Запуск сервера на порту 3000, если это не тестовая среда
if (process.env.NODE_ENV !== 'test') {
    const PORT = 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

export default app;
