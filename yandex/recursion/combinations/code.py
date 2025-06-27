KEYBOARD = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
}


def gen_binary(n, letters, prefix=""):
    if n == 0:
        print(prefix, end=" ")
    else:
        for letter in letters[0]:
            gen_binary(
                n - 1,
                letters[1:],
                prefix + letter,
            )


def main():
    numbers = list(map(int, input()))

    letters = []
    for number in numbers:
        letters.append(KEYBOARD[number])

    gen_binary(len(letters), letters)


if __name__ == "__main__":
    main()
