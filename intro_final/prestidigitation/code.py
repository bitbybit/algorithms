import sys


def get_result(hits, numbers):
    max_hits = hits * 2

    numbers_clean = list(
        map(int, filter((lambda number: number != "."), numbers)))
    numbers_unique = list(set(numbers_clean))

    result = 0

    for number_unique in numbers_unique:
        amount = len(
            list(filter((lambda number: number == number_unique),
                        numbers_clean))
        )

        if amount <= max_hits:
            result += 1

    return result


def main():
    hits = int(sys.stdin.readline().rstrip())

    numbers = []

    for i in range(4):
        numbers += list(sys.stdin.readline().rstrip())

    result = get_result(hits, numbers)

    print(result)


if __name__ == "__main__":
    main()
