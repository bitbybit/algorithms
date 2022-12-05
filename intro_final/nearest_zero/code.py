import sys


def get_result(num_list_length, num_list):
    zero_indexes_list = []
    result = [0] * num_list_length

    for num_index in range(num_list_length):
        if num_list[num_index] == 0:
            zero_indexes_list.append(num_index)

    for num_index in range(zero_indexes_list[0]):
        result[num_index] = zero_indexes_list[0] - num_index

    for zero_index in range(len(zero_indexes_list) - 1):
        for num_index in range(
            zero_indexes_list[zero_index] + 1,
            zero_indexes_list[zero_index + 1],
        ):
            result[num_index] = min(
                num_index - zero_indexes_list[zero_index],
                zero_indexes_list[zero_index + 1] - num_index,
            )

    for num_index in range(zero_indexes_list[-1] + 1, num_list_length):
        result[num_index] = num_index - zero_indexes_list[-1]

    return result


def main():
    num_list_length = int(sys.stdin.readline().rstrip())
    num_list = list(map(int, sys.stdin.readline().rstrip().split()))

    result = get_result(num_list_length, num_list)

    print(*result)


if __name__ == "__main__":
    main()
