from typing import Tuple


def result(total: int, first: list, second: list) -> str:
    numbers = []

    for i in range(0, total):
        numbers.append(first[i])
        numbers.append(second[i])

    return " ".join(numbers)


def read_input() -> Tuple[int, list, list]:
    total = int(input())
    first = str(input()).split()
    second = str(input()).split()

    return total, first, second


total, first, second = read_input()

print(result(total, first, second))
