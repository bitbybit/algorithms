import sys


def main():
    num1 = str(sys.stdin.readline().rstrip())
    num2 = str(sys.stdin.readline().rstrip())

    num1_length = len(num1)
    num2_length = len(num2)
    max_length = max([num1_length, num2_length])

    list1 = ([0] * (max_length - num1_length) + list(map(int, num1)))[::-1]
    list2 = ([0] * (max_length - num2_length) + list(map(int, num2)))[::-1]

    carry = [0] * (max_length + 1)
    result = [0] * len(carry)

    for i in range(len(result)):
        num1_cur = list1[i] if i < max_length else 0
        num2_cur = list2[i] if i < max_length else 0
        carry_cur = carry[i]

        if num1_cur == 1 and num2_cur == 1:
            result[i] = carry_cur
            carry[i + 1] = 1

        elif num1_cur == 1 or num2_cur == 1:
            if carry_cur == 1:
                result[i] = 0
                carry[i + 1] = 1
            else:
                result[i] = 1

        else:
            result[i] = carry_cur

    binary = "".join(list(map(str, result))[::-1]).lstrip("0")

    if binary == "":
        binary = "0"

    print(str(binary))


if __name__ == "__main__":
    main()
