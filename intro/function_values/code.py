def result(a, x, b, c):
    y = a * x * x + b * x + c

    return y


def read_input():
    data = str(input()).split()
    a = int(data[0])
    x = int(data[1])
    b = int(data[2])
    c = int(data[3])

    return a, x, b, c


def main():
    a, x, b, c = read_input()

    print(result(a, x, b, c))


if __name__ == "__main__":
    main()
