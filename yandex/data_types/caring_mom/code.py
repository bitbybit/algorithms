# Comment it before submitting
# class Node:
#     def __init__(self, value, next_item=None):
#         self.value = value
#         self.next_item = next_item


def find_node_index(head, value):
    index = 0
    node = head

    while node is not None:
        if node.value == value:
            return index

        index += 1
        node = node.next_item

    return -1


def solution(node, elem):
    return find_node_index(node, elem)
