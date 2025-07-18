# Два велосипеда

| Ограничение времени | Ограничение памяти |
|---------------------|--------------------|
| 1 секунда           | 256Mb              |

Вася решил накопить денег на два одинаковых велосипеда — себе и сестре. У Васи есть копилка, в которую каждый день он может добавлять деньги (если, конечно, у него есть такая финансовая возможность). В процессе накопления Вася не вынимает деньги из копилки.
У вас есть информация о росте Васиных накоплений — сколько у Васи в копилке было денег в каждый из дней.

Ваша задача — по заданной стоимости велосипеда определить

* первый день, в которой Вася смог бы купить один велосипед,

* и первый день, в который Вася смог бы купить два велосипеда.

**Подсказка**: решение должно работать за $O(log_n)$.

## Формат ввода

В первой строке дано число дней $n$, по которым велись наблюдения за Васиными накоплениями. $1 ≤ n ≤ 10^6$.
В следующей строке записаны $n$ целых неотрицательных чисел. Числа идут в порядке неубывания. Каждое из чисел не превосходит $10^6$.

В третьей строке записано целое положительное число $s$ — стоимость велосипеда. Это число не превосходит $10^6$.

## Формат вывода

Нужно вывести два числа — номера дней по условию задачи.
Если необходимой суммы в копилке не нашлось, нужно вернуть $-1$ вместо номера дня.

### Пример 1

| Ввод                  | Вывод |
|-----------------------|-------|
| 6<br>1 2 4 4 6 8<br>3 | 3 5   |

### Пример 2

| Ввод                  | Вывод |
|-----------------------|-------|
| 6<br>1 2 4 4 4 4<br>3 | 3 -1  |

### Пример 3

| Ввод                   | Вывод |
|------------------------|-------|
| 6<br>1 2 4 4 4 4<br>10 | -1 -1 |