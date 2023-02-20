def result(lines_list, lines_list_length):
    perimeter = 0

    for line_index in range(lines_list_length):
        if line_index + 2 > lines_list_length:
            break

        line_c = lines_list[line_index]
        line_a = lines_list[line_index + 1]
        line_b = lines_list[line_index + 2]

        if line_c < line_a + line_b:
            perimeter = line_a + line_b + line_c

            break

    return perimeter


def main():
    lines_list_length = int(input())
    lines_list = sorted(list(map(int, input().split())), reverse=True)

    print(
        result(
            lines_list=lines_list,
            lines_list_length=lines_list_length,
        )
    )


if __name__ == "__main__":
    main()
