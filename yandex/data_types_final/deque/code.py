import sys


class Deque:
    def __init__(self, n):
        self.__queue = [None] * n
        self.__max_n = n
        self.__head = 0
        self.__tail = 0
        self.__size = 0

    def is_empty(self):
        return self.__size == 0

    def is_full(self):
        return self.__size == self.__max_n

    def push_back(self, value):
        if self.is_full():
            raise RuntimeError("Queue is full")

        self.__queue[self.__tail] = value
        self.__tail = (self.__tail + 1) % self.__max_n
        self.__size += 1

    def pop_front(self):
        if self.is_empty():
            raise RuntimeError("Queue is empty")

        value = self.__queue[self.__head]

        self.__queue[self.__head] = None
        self.__head = (self.__head + 1) % self.__max_n
        self.__size -= 1

        return value

    def push_front(self, value):
        if self.is_full():
            raise RuntimeError("Queue is full")

        self.__queue[self.__head - 1] = value
        self.__head = (self.__head - 1) % self.__max_n
        self.__size += 1

    def pop_back(self):
        if self.is_empty():
            raise RuntimeError("Queue is empty")

        value = self.__queue[self.__tail - 1]
        self.__queue[self.__tail - 1] = None
        self.__tail = (self.__tail - 1) % self.__max_n
        self.__size -= 1

        return value


def main():
    methods_length = int(sys.stdin.readline().rstrip())
    queue_size = int(sys.stdin.readline().rstrip())

    queue = Deque(queue_size)

    for i in range(methods_length):
        method = sys.stdin.readline().rstrip().split()
        name = method[0]
        args = method[1:]

        try:
            result = getattr(queue, name)(*args)
        except RuntimeError:
            result = "error"

        if result is not None:
            print(result)


if __name__ == "__main__":
    main()
