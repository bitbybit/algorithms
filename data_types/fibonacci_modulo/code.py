def fibonacci(n, k):
    result = 1

    if n < 2:
        return result

    values = [1, 1]
    last_numbers = 10 ** k
    count = n + 1

    while count > 2:
        result = (values[0] + values[1]) % last_numbers
        values = [values[1], result]

        count -= 1

    return result


def main():
    n, k = list(map(int, input().split()))

    f = fibonacci(n, k)

    print(f)


if __name__ == "__main__":
    main()
