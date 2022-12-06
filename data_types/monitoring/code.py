def reverse(matrix_list, rows_length, cols_length):
    reversed_matrix = ""

    for col_index in range(cols_length):
        row = []

        for row_index in range(rows_length):
            row.append(matrix_list[row_index][col_index])

        reversed_matrix += f"{' '.join(row)}\n"

    return reversed_matrix


def main():
    rows_length = int(input())
    cols_length = int(input())

    matrix_list = []

    for _ in range(rows_length):
        matrix_list.append(input().split())

    matrix_reversed = reverse(matrix_list, rows_length, cols_length)

    print(matrix_reversed)


if __name__ == "__main__":
    main()
