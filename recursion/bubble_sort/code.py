def sort(numbers_length, numbers):
    is_sorted = False
    was_sorted = False

    for i in range(numbers_length - 1):
        for j in range(0, numbers_length - i - 1):
            if numbers[j] > numbers[j + 1]:
                numbers[j], numbers[j + 1] = numbers[j + 1], numbers[j]
                is_sorted = True
                was_sorted = True

        if is_sorted:
            print(*numbers)

        is_sorted = False

    if not was_sorted:
        print(*numbers)


def main():
    numbers_length = int(input())
    numbers = list(map(int, input().split()))

    sort(numbers_length, numbers)


if __name__ == "__main__":
    main()
