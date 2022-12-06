# Comment it before submitting
# class Node:
#     def __init__(self, value, next_item=None):
#         self.value = value
#         self.next_item = next_item


def get_node_by_index(node, index):
    while index:
        node = node.next_item
        index -= 1
    return node


def delete_node(head, index):
    if index == 0:
        return head.next_item

    node_to_delete = get_node_by_index(head, index)

    previous_node = get_node_by_index(head, index - 1)
    previous_node.next_item = node_to_delete.next_item

    return head


def solution(node, idx):
    return delete_node(node, idx)


def test():
    node3 = Node("node3", None)
    node2 = Node("node2", node3)
    node1 = Node("node1", node2)
    node0 = Node("node0", node1)
    new_head = solution(node0, 1)
