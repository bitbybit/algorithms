import sys


class QueueStack:
    def __init__(self):
        self.node = None
        self._size = 0

    def put(self, item):
        node = self.Node(int(item))

        if self.node is None:
            self.node = node
        else:
            last = self.get_node_by_index(self._size - 1)
            last.next_item = node

        self._size += 1

    def get(self):
        if self.is_empty():
            return "error"
        else:
            value = self.node.value

            self.delete_node(0)
            self._size -= 1

            return value

    def size(self):
        return self._size

    def is_empty(self):
        return self._size == 0

    class Node:
        def __init__(self, value, next_item=None):
            self.value = value
            self.next_item = next_item

    def get_node_by_index(self, index):
        node = self.node

        while index:
            node = node.next_item
            index -= 1

        return node

    def delete_node(self, index):
        if index == 0:
            self.node = self.node.next_item

        else:
            previous_node = self.get_node_by_index(index - 1)
            node_to_delete = previous_node.next_item

            previous_node.next_item = (
                None if node_to_delete is None else node_to_delete.next_item
            )


def main():
    methods_length = int(sys.stdin.readline().rstrip())

    stack = QueueStack()

    results = []

    for i in range(methods_length):
        method = sys.stdin.readline().rstrip().split()
        name = method[0]
        args = method[1:]

        result = getattr(stack, name)(*args)

        if name == "size" or name == "get":
            results.append(result)

    for result in results:
        print(result)


if __name__ == "__main__":
    main()
