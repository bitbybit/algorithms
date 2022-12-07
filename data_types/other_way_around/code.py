# Comment it before submitting
# class DoubleConnectedNode:
#     def __init__(self, value, next=None, prev=None):
#         self.value = value
#         self.next = next
#         self.prev = prev


def reverse(node):
    if node.next is None:
        node.next = node.prev
        node.prev = None
        return node

    node.next, node.prev = node.prev, node.next

    return reverse(node.prev)


def solution(node):
    return reverse(node)
