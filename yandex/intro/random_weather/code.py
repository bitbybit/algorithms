import sys


def main():
    days_list_length = int(input())
    days_list = list(map(int, sys.stdin.readline().rstrip().split()))

    days_chaotic_count = 0

    if days_list_length == 1:
        days_chaotic_count = 1
    else:
        for i in range(days_list_length):
            temp_cur = days_list[i]

            i_prev = i - 1
            if 0 <= i_prev < days_list_length:
                temp_prev = days_list[i_prev]
            else:
                temp_prev = None

            i_next = i + 1
            if 0 <= i_next < days_list_length:
                temp_next = days_list[i_next]
            else:
                temp_next = None

            if (
                (
                    temp_prev is not None
                    and temp_next is not None
                    and temp_cur > temp_prev
                    and temp_cur > temp_next
                )
                or (temp_prev is None and temp_cur > temp_next)
                or (temp_next is None and temp_cur > temp_prev)
            ):
                days_chaotic_count += 1

    print(str(days_chaotic_count))


if __name__ == "__main__":
    main()
