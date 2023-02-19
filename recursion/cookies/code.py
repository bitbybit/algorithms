def result(
    children_list, children_list_length, cookie_list, cookie_list_length
):
    count = 0

    for children_index in range(children_list_length):
        if cookie_list_length == 0:
            break

        if children_list[children_index] <= cookie_list[-1]:
            count += 1

            cookie_list.pop()
            cookie_list_length -= 1

    return count


def main():
    children_list_length = int(input())
    children_list = sorted(list(map(int, input().split())), reverse=True)

    cookie_list_length = int(input())
    cookie_list = sorted(list(map(int, input().split())))

    print(
        result(
            children_list=children_list,
            children_list_length=children_list_length,
            cookie_list=cookie_list,
            cookie_list_length=cookie_list_length,
        )
    )


if __name__ == "__main__":
    main()
