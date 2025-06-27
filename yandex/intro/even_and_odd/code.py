def result(a, b, c):
    if a % 2 == b % 2 == c % 2:
        return "WIN"

    return "FAIL"


def read_input():
    data = str(input()).split()
    a = int(data[0])
    b = int(data[1])
    c = int(data[2])

    return a, b, c


def main():
    a, b, c = read_input()

    print(result(a, b, c))


if __name__ == "__main__":
    main()
