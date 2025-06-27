import sys


class Stack:
    def __init__(self):
        self.items = []
        self.max = []

    def push(self, item):
        value = int(item)
        items_length = len(self.items)

        if self.is_empty():
            self.max.append(value)
        elif value > self.max[items_length - 1]:
            self.max.append(value)
        else:
            self.max.append(self.max[items_length - 1])

        self.items.append(item)

    def pop(self):
        if self.is_empty():
            return "error"

        self.max.pop()
        self.items.pop()

    def is_empty(self):
        return len(self.items) == 0

    def get_max(self):
        if self.is_empty():
            max_item = None
        else:
            max_item = self.max[len(self.items) - 1]

        return max_item


def main():
    methods_length = int(sys.stdin.readline().rstrip())

    stack = Stack()

    results = []

    for i in range(methods_length):
        method = sys.stdin.readline().rstrip().split()
        name = method[0]
        args = method[1:]

        result = getattr(stack, name)(*args)

        if name == "get_max" or (name == "pop" and result == "error"):
            results.append(result)

    for result in results:
        print(result)


if __name__ == "__main__":
    main()
