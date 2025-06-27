import sys


def main():
    matrix_rows = int(input())
    matrix_cols = int(input())
    matrix = []

    for row in range(matrix_rows):
        line = sys.stdin.readline().rstrip()
        matrix.append(list(map(int, str(line).split())))

    y = int(input())
    x = int(input())

    if y >= matrix_rows or x >= matrix_cols:
        return None

    neighbours = []

    y_top = y - 1
    y_down = y + 1
    x_left = x - 1
    x_right = x + 1

    if 0 <= y_top < matrix_rows:
        neighbours.append(matrix[y_top][x])

    if 0 <= y_down < matrix_rows:
        neighbours.append(matrix[y_down][x])

    if 0 <= x_left < matrix_cols:
        neighbours.append(matrix[y][x_left])

    if 0 <= x_right < matrix_cols:
        neighbours.append(matrix[y][x_right])

    neighbours.sort()

    print(" ".join(list(map(str, neighbours))))


if __name__ == "__main__":
    main()
