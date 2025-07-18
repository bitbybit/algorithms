# Калькулятор

| Ограничение времени | Ограничение памяти |
|---------------------|--------------------|
| 1 секунда           | 64Mb               |

Задание связано с обратной польской нотацией. Она используется для парсинга арифметических выражений. Еще её иногда называют постфиксной нотацией.<br>
В постфиксной нотации операнды расположены перед знаками операций.<br>
<br>
Пример 1:<br>
$3$ $4$ $+$<br>
означает $3 + 4$ и равно $7$<br> 
<br>
Пример 2:<br> 
$12$ $5$ $/$<br>
Так как деление целочисленное, то в результате получим $2$.<br>
<br>
Пример 3:<br>
$10$ $2$ $4$ $\*$ $-$<br>
означает $10 - 2 * 4$ и равно $2$<br>
<br>
Разберём последний пример подробнее:<br>
<br>
Знак $\*$ стоит сразу после чисел $2$ и $4$, значит к ним нужно применить операцию, которую этот знак обозначает, то есть перемножить эти два числа. В результате получим $8$.<br>
<br>
После этого выражение приобретёт вид:<br>
<br>
$10$ $8$ $-$<br>
<br>
Операцию «минус» нужно применить к двум идущим перед ней числам, то есть $10$ и $8$. В итоге получаем $2$.<br>
<br>
Рассмотрим алгоритм более подробно. Для его реализации будем использовать стек.<br>
<br>
Для вычисления значения выражения, записанного в обратной польской нотации, нужно считывать выражение слева направо и придерживаться следующих шагов:

 1. Обработка входного символа:
    * Если на вход подан операнд, он помещается на вершину стека.
    * Если на вход подан знак операции, то эта операция выполняется над требуемым количеством значений, взятых из стека в порядке добавления. Результат выполненной операции помещается на вершину стека.
 2. Если входной набор символов обработан не полностью, перейти к шагу 1.
 3. После полной обработки входного набора символов результат вычисления выражения находится в вершине стека. Если в стеке осталось несколько чисел, то надо вывести только верхний элемент.

**Замечание про отрицательные числа и деление**: в этой задаче под делением понимается математическое целочисленное деление. Это значит, что округление всегда происходит вниз. А именно: если $a / b = c$, то $b ⋅ c$ — это наибольшее число, которое не превосходит $a$ и одновременно делится без остатка на $b$.<br>
<br>
Например, $-1 / 3 = -1$. Будьте осторожны: в C++, Java и Go, например, деление чисел работает иначе.<br>
<br>
В текущей задаче гарантируется, что деления на отрицательное число нет.

## Формат ввода

В единственной строке дано выражение, записанное в обратной польской нотации. Числа и арифметические операции записаны через пробел.<br>
На вход могут подаваться операции: $+$, $-$, $*$, $/$ и числа, по модулю не превосходящие $10000$.<br>
Гарантируется, что значение промежуточных выражений в тестовых данных по модулю не больше $50000$.

## Формат вывода

Выведите единственное число — значение выражения.

### Пример 1

| Ввод       | Вывод |
|------------|-------|
| 2 1 + 3 *  | 9     |

### Пример 2

| Ввод          | Вывод |
|---------------|-------|
| 7 2 + 4 * 2 + | 38    |
