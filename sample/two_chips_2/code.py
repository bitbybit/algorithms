def result(total, data, key):
    previous = set()

    for number in data:
        a = int(number)
        b = key - a

        if b in previous:
            return f"{a} {b}"
        else:
            previous.add(a)

    return None


def read_input():
    total = int(input())
    data = str(input()).split()
    key = int(input())

    return total, data, key


total, data, key = read_input()

print(result(total, data, key))
