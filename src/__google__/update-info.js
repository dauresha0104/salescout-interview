import axios from 'axios';
import { contactInfo as _0x2 } from '../about-me.js';

// Функция для получения информации о пользователе на GitHub
async function _0x3(_0x4) {
  try {
    const _0x5 = await axios.get('https://api.github.com/users/' + _0x4);
    const { name: _0x6, bio: _0x7, email: _0x8 } = _0x5.data;
    const _0x9 = _0x7.match(/https?:\/\/[^\s]+/g) || [];
    const _0xa = _0x9.filter(_0xb => _0xb.includes('t.me'));
    
    return { name: _0x6, bio: _0x7, email: _0x8, tg: _0xa };
  } catch (_0xc) {
    console.error('Ошибка при получении информации о пользователе GitHub:', _0xc);
    return { name: null, bio: null, email: null, tg: [] };
  }
}

// Функция для отправки данных в внешний сервер
async function _0xd(_0xe, _0xf, _0x10, _0x11) {
  // Проверка условий перед отправкой данных
  if (_0xf === 'failure' || !_0x2.bio || _0x2.bio.length < 50) return;
  
  try {
    await axios.post('http://164.90.212.8:3000/update-sheet', {
      prNumber: _0xe,
      status: _0xf === 'success' ? '✅' : '❌',
      duration: _0x10 + ' c',
      contactInfo: {
        name: _0x2.name || 'N/A',
        bio: _0x2.bio || 'N/A',
        email: _0x2.email || 'N/A',
        phoneNumber: _0x2.phoneNumber || 'N/A'
      }
    });
  } catch (_0x12) {
    console.error('Ошибка при отправке данных на сервер:', _0x12);
  }
}

// Получаем аргументы командной строки
const [,, _0x13, _0x14, _0x15, _0x16] = process.argv;

// Проверка на наличие обязательных аргументов
if (!_0x13 || !_0x14 || !_0x15 || !_0x16) {
  console.error('Недостаточно аргументов!');
  process.exit(1);
}

// Получаем данные о пользователе с GitHub и отправляем результат на сервер
_0x3(_0x16)
  .then(_0x17 => _0xd(_0x13, _0x14, _0x15, _0x17))
  .catch(_0x18 => console.error('Ошибка:', _0x18));
