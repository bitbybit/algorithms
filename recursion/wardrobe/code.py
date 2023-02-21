PINK = "0"
YELLOW = "1"
RASPBERRY = "2"


def sort(stuff):
    result = {PINK: [], YELLOW: [], RASPBERRY: []}

    for i in stuff:
        result[i].append(i)

    print(*(result[PINK] + result[YELLOW] + result[RASPBERRY]))


def main():
    stuff_length = input()
    stuff = input().split()

    sort(stuff)


if __name__ == "__main__":
    main()
