import sys


def main():
    word1 = sys.stdin.readline().rstrip()
    word2 = sys.stdin.readline().rstrip()

    word1_list = list(word1)
    word2_list = list(word2)

    word1_length = len(word1_list)
    word2_length = len(word2_list)

    word_max_length = max(word1_length, word2_length)

    word1_list.sort()
    word2_list.sort()

    for i in range(word_max_length):
        if i >= word1_length or word1_list[i] != word2_list[i]:
            print(word2_list[i])
            break


if __name__ == "__main__":
    main()
