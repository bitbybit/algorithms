import sys


def main():
    decimal = int(sys.stdin.readline())

    if decimal == 0:
        binary = "0"
    else:
        remainders = []
        quotient = decimal

        while int(quotient) != 0:
            result = quotient / 2
            result_int = int(result)

            if result != result_int:
                remainders.append("1")
            else:
                remainders.append("0")

            quotient = result_int

        binary = "".join(remainders[::-1])

    print(str(binary))


if __name__ == "__main__":
    main()
