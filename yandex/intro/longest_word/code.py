import sys


def main():
    text_length = int(input())
    words_list = list(sys.stdin.readline().strip().split())

    word_max = None
    word_max_length = 0

    for word in words_list:
        word_length = len(word)

        if word_length > word_max_length:
            word_max = word
            word_max_length = word_length

    print(str(word_max))
    print(str(word_max_length))


if __name__ == "__main__":
    main()
