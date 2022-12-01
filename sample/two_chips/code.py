def result(total: int, data: list, key: int):
    for i in range(0, total):
        data_i = int(data[i])

        for j in range(i + 1, total):
            if data_i + int(data[j]) == key:
                return data[i] + " " + data[j]

    return None


def read_input():
    total = int(input())
    data = str(input()).split()
    key = int(input())

    return total, data, key


total, data, key = read_input()

print(result(total, data, key))
