import math


def get_mean(north_length, south_length, north, south):
    result = north + south
    length = north_length + south_length

    result.sort()

    if length % 2 == 0:
        index_start = math.ceil(length / 2) - 1
        index_end = index_start + 1
        value = (result[index_start] + result[index_end]) / 2
    else:
        index = math.ceil(length / 2) - 1
        value = result[index]

    return "%g" % value


def main():
    north_length = int(input())
    south_length = int(input())
    north = list(map(int, input().split()))
    south = list(map(int, input().split()))

    print(get_mean(north_length, south_length, north, south))


if __name__ == "__main__":
    main()
