from typing import Tuple


def get_sum(a: int, b: int) -> int:
    return a + b


def read_input() -> Tuple[int, int]:
    a = int(input())
    b = int(input())

    return a, b


a, b = read_input()

print(get_sum(a, b))
