def result(cost_list, cost_list_length, money):
    count = 0

    for cost_index in range(cost_list_length):
        if cost_list_length == 0 or money == 0:
            break

        if cost_list[cost_index] <= money:
            count += 1
            money -= cost_list[cost_index]

            cost_list_length -= 1

    return count


def main():
    [cost_list_length, money] = list(map(int, input().split()))

    cost_list = sorted(list(map(int, input().split())))

    print(
        result(
            cost_list=cost_list,
            cost_list_length=cost_list_length,
            money=money,
        )
    )


if __name__ == "__main__":
    main()
