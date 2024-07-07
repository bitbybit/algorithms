import random


def partition(array, pivot, key):
    left = []
    center = []
    right = []

    for item in array:
        key_item = key(item)
        key_pivot = key(array[pivot])

        if key_item == key_pivot:
            center.append(item)
        elif key_item > key_pivot:
            right.append(item)
        else:
            left.append(item)

    return left, center, right


def quicksort(array, key):
    array_length = len(array)

    if array_length < 2:
        return array

    pivot = random.randint(0, array_length - 1)
    left, center, right = partition(array, pivot, key)

    return quicksort(left, key) + center + quicksort(right, key)


def main():
    participant_length = int(input())
    participants = []

    for i in range(participant_length):
        username, problems, penalties = input().split()

        participants.append(
            {
                "username": username,
                "count": {
                    "problems": int(problems),
                    "penalties": int(penalties),
                },
            }
        )

    participants_sorted = quicksort(
        participants,
        key=lambda item: (
            -item["count"]["problems"],
            item["count"]["penalties"],
            item["username"],
        ),
    )

    for participant in participants_sorted:
        print(participant["username"])


if __name__ == "__main__":
    main()
