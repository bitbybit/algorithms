import sys


def main():
    num = int(sys.stdin.readline())

    least_primes = []

    i = 2

    while i * i <= num:
        while num % i == 0:
            least_primes.append(i)
            num = int(num / i)

        i = i + 1

    if num > 1:
        least_primes.append(num)

    print(" ".join(list(map(str, least_primes))))


if __name__ == "__main__":
    main()
