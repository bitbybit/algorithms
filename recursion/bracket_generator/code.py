def gen_binary(n1, n2, n=0, prefix=""):
    if n1 == 0 and n2 == 0 and prefix != "":
        print(prefix)
    else:
        if n1 > 0:
            gen_binary(n1 - 1, n2, n + 1, prefix + "(")
        if n > 0 and n2 > 0:
            gen_binary(n1, n2 - 1, n - 1, prefix + ")")


def main():
    n = int(input())

    gen_binary(n1=n, n2=n)


if __name__ == "__main__":
    main()
