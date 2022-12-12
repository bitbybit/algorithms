from math import floor

OPERATIONS = {
    "+": lambda x, y: x + y,
    "-": lambda x, y: x - y,
    "*": lambda x, y: x * y,
    "/": lambda x, y: x / y,
}


def is_operator(value):
    return value in OPERATIONS.keys()


def calculate(stack, operator):
    value1 = stack.pop()
    value2 = stack.pop()
    result = OPERATIONS[operator](value2, value1)

    return floor(result)


class Stack:
    def __init__(self):
        self.__numbers = []

    def push(self, value):
        self.__numbers.append(value)

    def pop(self):
        return self.__numbers.pop()

    def peek(self):
        return self.__numbers[-1]


def main():
    values = input().split()

    stack = Stack()

    for value in values:
        if is_operator(value):
            result = calculate(stack, value)
        else:
            result = int(value)
        stack.push(result)

    print(stack.peek())


if __name__ == "__main__":
    main()
