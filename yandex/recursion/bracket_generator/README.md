# Генератор скобок

| Ограничение времени | Ограничение памяти |
|---------------------|--------------------|
| 1 секунда           | 64Mb               |

Рита по поручению Тимофея наводит порядок в правильных скобочных последовательностях (ПСП), состоящих только из круглых скобок (). Для этого ей надо сгенерировать все ПСП длины $2n$ в алфавитном порядке – алфавит состоит из ( и ) и открывающая скобка идёт раньше закрывающей.<br>
Помогите Рите – напишите программу, которая по заданному $n$ выведет все ПСП в нужном порядке.<br>
Рассмотрим второй пример. Надо вывести ПСП из четырёх символов. Таких всего две:<br>

 1. (())
 2. ()()

(()) идёт раньше ()(), так как первый символ у них одинаковый, а на второй позиции у первой ПСП стоит (, который идёт раньше ).

## Формат ввода

На вход функция принимает $n$ — целое число от $0$ до $10$.

## Формат вывода

Функция должна напечатать все возможные скобочные последовательности заданной длины в алфавитном (лексикографическом) порядке.

### Пример 1

| Ввод | Вывод                                          |
|------|------------------------------------------------|
| 3    | ((()))<br>(()())<br>(())()<br>()(())<br>()()() |

### Пример 2

| Ввод | Вывод        |
|------|--------------|
| 2    | (())<br>()() |
