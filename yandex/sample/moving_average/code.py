from typing import Tuple


def result(total: int, data: list, key: int) -> str:
    numbers = []

    current_sum = sum(list(map(int, data))[0:key])
    numbers.append(str(current_sum / key))

    for i in range(0, total - key):
        current_sum -= int(data[i])
        current_sum += int(data[i + key])
        current_avg = str(current_sum / key)
        numbers.append(current_avg)

    return " ".join(numbers)


def read_input() -> Tuple[int, list, int]:
    total = int(input())
    data = str(input()).split()
    key = int(input())

    return total, data, key


total, data, key = read_input()

print(result(total, data, key))
