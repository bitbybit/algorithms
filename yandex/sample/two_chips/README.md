# Две фишки

| Ограничение времени | Ограничение памяти |
|---------------------|--------------------|
| 4 секунды           | 256Mb              |

Рита и Гоша играют в игру. У Риты есть $n$ фишек, на каждой из которых написано количество очков. Сначала Гоша называет число $k$, затем Рита должна выбрать две фишки, сумма очков на которых равна заданному числу.<br>
Рите надоело искать фишки самой, и она решила применить свои навыки программирования для решения этой задачи. Помогите ей написать программу для поиска нужных фишек.

## Формат ввода

В первой строке записано количество фишек $n$, $2 ≤ n ≤ 10^4$.<br>
Во второй строке записано $n$ целых чисел – очки на фишках Риты в диапазоне от $-10^5$ до $10^5$.<br>
<br>
В третьей строке – загаданное Гошей целое число $k$, $-10^5 ≤ k ≤ 10^5$.

## Формат вывода

Нужно вывести два числа – очки на двух фишках, в сумме дающие $k$.<br>
Если таких пар несколько, то можно вывести любую из них.<br>
<br>
Если таких пар не существует, то вывести «None».

### Пример 1

| Ввод                       | Вывод |
|----------------------------|-------|
| 6<br>-1 -1 -9 -7 3 -6<br>2 | -1 3  |

### Пример 2

| Ввод                          | Вывод |
|-------------------------------|-------|
| 8<br>6 2 8 -3 1 1 6 10<br>100 | None  |
