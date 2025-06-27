import sys


class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(int(item))

    def pop(self):
        if self.is_empty():
            return "error"
        else:
            self.items.pop()

    def is_empty(self):
        return len(self.items) == 0

    def get_max(self):
        if self.is_empty():
            max_item = None
        else:
            max_item = max(self.items)

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
