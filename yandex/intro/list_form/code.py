import sys


def main():
    num1_length = int(sys.stdin.readline().rstrip())
    num1_list = sys.stdin.readline().rstrip().split()
    num2 = int(sys.stdin.readline().rstrip())

    num1 = int("".join(num1_list))

    sum = num1 + num2

    sum_str = " ".join(str(sum))

    print(sum_str)


if __name__ == "__main__":
    main()
