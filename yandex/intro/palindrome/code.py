import sys
from string import ascii_letters, digits


def main():
    text = sys.stdin.readline().lower()
    allowed_symbols = set(ascii_letters + digits)
    text_clean = "".join(filter(allowed_symbols.__contains__, text))
    text_reverse = text_clean[::-1]

    result = text_clean == text_reverse

    print(str(result))


if __name__ == "__main__":
    main()
