# Чётные и нечётные числа

| Ограничение времени | Ограничение памяти |
|---------------------|--------------------|
| 1 секунда           | 64Mb               |

Представьте себе онлайн-игру для поездки в метро: игрок нажимает на кнопку, и на экране появляются три случайных числа. Если все три числа оказываются одной чётности, игрок выигрывает.<br>
Напишите программу, которая по трём числам определяет, выиграл игрок или нет.

## Формат ввода

В первой строке записаны три случайных целых числа $a$, $b$ и $c$. Числа не превосходят $10^9$ по модулю.

## Формат вывода

Выведите «WIN», если игрок выиграл, и «FAIL» в противном случае.

### Пример 1

| Ввод   | Вывод |
|--------|-------|
| 1 2 -3 | FAIL  |

### Пример 2

| Ввод   | Вывод |
|--------|-------|
| 7 11 7 | WIN   |

### Пример 3

| Ввод   | Вывод |
|--------|-------|
| 6 -2 0 | WIN   |