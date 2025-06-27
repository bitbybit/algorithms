import sys


class MyQueueSized:
    def __init__(self, max_size):
        self.max_size = max_size
        self.queue = [None] * max_size
        self.queue_size = 0

    def push(self, item):
        if self.size() == self.max_size:
            return "error"

        for i in range(self.max_size):
            if self.queue[i] is None:
                self.queue[i] = int(item)
                self.queue_size += 1
                break

    def is_empty(self):
        return self.queue_size == 0

    def pop(self):
        if self.is_empty():
            return None

        value = self.queue[0]
        self.queue = self.queue[1:]
        self.queue.append(None)
        self.queue_size -= 1

        return value

    def peek(self):
        return self.queue[0]

    def size(self):
        return self.queue_size


def main():
    methods_length = int(sys.stdin.readline().rstrip())
    queue_size = int(sys.stdin.readline().rstrip())

    queue = MyQueueSized(queue_size)

    results = []

    for i in range(methods_length):
        method = sys.stdin.readline().rstrip().split()
        name = method[0]
        args = method[1:]

        result = getattr(queue, name)(*args)

        if (name == "push" and result == "error") or name != "push":
            results.append(result)

    for result in results:
        print(result)


if __name__ == "__main__":
    main()
