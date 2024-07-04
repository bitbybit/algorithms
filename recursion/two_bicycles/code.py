def binary_search_cost(arr, x, left, right):
    if right <= left != 0:
        return -1

    mid = (left + right) // 2

    if arr[mid] >= x and (arr[mid - 1] < x or mid == 0):
        return mid + 1
    elif x <= arr[mid]:
        return binary_search_cost(arr, x, left, mid)
    else:
        return binary_search_cost(arr, x, mid + 1, right)


def main():
    days_length = int(input())
    money_per_day_list = list(map(int, input().split()))
    cost = int(input())

    result = [
        binary_search_cost(money_per_day_list, cost, 0, days_length),
        binary_search_cost(money_per_day_list, cost * 2, 0, days_length),
    ]

    print(*result)


if __name__ == "__main__":
    main()
