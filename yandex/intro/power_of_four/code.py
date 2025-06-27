import sys


def main():
    num = int(sys.stdin.readline())
    num_temp = num

    result = False

    while num_temp > 1:
        num_temp = num_temp / 4

    if num_temp == 1:
        result = True

    print(str(result))


if __name__ == "__main__":
    main()
