def is_sequence(search, string):
    search_length = len(search)
    string_length = len(string)

    if search_length == 0:
        return True

    if search_length > string_length:
        return False

    search_index = 0

    for string_index in range(string_length):
        if search[search_index] == string[string_index]:
            search_index += 1

            if search_index == search_length:
                return True

    return False


def main():
    s = input()
    t = input()

    print(is_sequence(s, t))


if __name__ == "__main__":
    main()
