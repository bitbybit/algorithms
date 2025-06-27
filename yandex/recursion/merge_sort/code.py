def merge(arr, lf, mid, rg):
    left = arr[lf:mid]
    right = arr[mid:rg]

    k = lf
    i = 0
    j = 0

    while lf + i < mid and mid + j < rg:
        if left[i] <= right[j]:
            arr[k] = left[i]
            i = i + 1

        else:
            arr[k] = right[j]
            j = j + 1

        k = k + 1

    if lf + i < mid:
        while k < rg:
            arr[k] = left[i]
            i = i + 1
            k = k + 1

    else:
        while k < rg:
            arr[k] = right[j]
            j = j + 1
            k = k + 1

    return arr


def merge_sort(arr, lf, rg):
    if rg - lf > 1:
        mid = (lf + rg) // 2

        merge_sort(arr, lf, mid)
        merge_sort(arr, mid, rg)

        merge(arr, lf, mid, rg)


def test():
    a = [1, 4, 9, 2, 10, 11]
    b = merge(a, 0, 3, 6)
    expected = [1, 2, 4, 9, 10, 11]
    assert b == expected
    c = [1, 4, 2, 10, 1, 2]
    merge_sort(c, 0, 6)
    expected = [1, 1, 2, 2, 4, 10]
    assert c == expected
