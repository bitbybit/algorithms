# Комбинации

| Ограничение времени | Ограничение памяти |
|---------------------|--------------------|
| 1 секунда           | 64Mb               |

На клавиатуре старых мобильных телефонов каждой цифре соответствовало несколько букв. Примерно так:<br>
2:'abc',<br>
3:'def',<br>
4:'ghi',<br>
5:'jkl',<br>
6:'mno',<br>
7:'pqrs',<br>
8:'tuv',<br>
9:'wxyz'<br>
Вам известно в каком порядке были нажаты кнопки телефона, без учета повторов. Напечатайте все комбинации букв, которые можно набрать такой последовательностью нажатий.

![](./image.png)

## Формат ввода

На вход подается строка, состоящая из цифр 2-9 включительно. Длина строки не превосходит $10$ символов.

## Формат вывода

Выведите все возможные комбинации букв через пробел.

### Пример 1

| Ввод | Вывод                      |
|------|----------------------------|
| 23   | ad ae af bd be bf cd ce cf |

### Пример 2

| Ввод | Вывод                               |
|------|-------------------------------------|
| 92   | wa wb wc xa xb xc ya yb yc za zb zc |
