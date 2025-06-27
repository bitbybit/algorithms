import sys


def is_correct_bracket_seq(values):
    if len(values) == 0:
        return True

    first = values[0]
    last = values[-1]

    if first == "]" or first == ")" or first == "}":
        return False

    if last == "[" or last == "(" or last == "{":
        return False

    if (
        (first == "[" and last == "]")
        or (first == "(" and last == ")")
        or (first == "{" and last == "}")
    ) and is_correct_bracket_seq(values[1:-1]):
        return True

    return False


def main():
    bracket_seq = sys.stdin.readline().rstrip()

    while (
        ("[]" in bracket_seq) or ("()" in bracket_seq) or ("{}" in bracket_seq)
    ):
        bracket_seq = bracket_seq.replace("[]", "")
        bracket_seq = bracket_seq.replace("()", "")
        bracket_seq = bracket_seq.replace("{}", "")

    result = is_correct_bracket_seq(list(bracket_seq))

    print(result)


if __name__ == "__main__":
    main()
