def get_biggest_number(numbers_length, numbers):
    for i in range(numbers_length - 1):
        for j in range(0, numbers_length - i - 1):
            if numbers[j] + numbers[j + 1] < numbers[j + 1] + numbers[j]:
                numbers[j], numbers[j + 1] = numbers[j + 1], numbers[j]

    return "".join(numbers)


def main():
    numbers_length = int(input())
    numbers = input().split()

    print(get_biggest_number(numbers_length, numbers))


if __name__ == "__main__":
    main()
