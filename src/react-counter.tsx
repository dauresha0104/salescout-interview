// Implement a Counter component with two buttons:
// “Increase” and “Decrease”, which displays the current counter value.
import React, { useState } from 'react';

function Counter() {
    // Создаем состояние для хранения текущего значения счётчика
    const [count, setCount] = useState(0);

    // Функция для увеличения счётчика
    const increase = () => setCount(count + 1);

    // Функция для уменьшения счётчика
    const decrease = () => setCount(count - 1);

    return (
        <div>
            <p>Текущее значение счётчика: {count}</p>
            <button onClick={increase}>Увеличить</button>
            <button onClick={decrease}>Уменьшить</button>
        </div>
    );
}

export default Counter;
