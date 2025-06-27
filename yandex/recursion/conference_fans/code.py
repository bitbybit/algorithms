def get_top_schools(school_ids, top_schools_amount):
    top_schools = [
        {"school_id": range_index, "students": 0}
        for range_index in range(max(school_ids) + 1)
    ]

    for school_id in school_ids:
        top_schools[school_id]["students"] += 1

    top_schools.sort(key=lambda school: -school["students"])

    top_schools_trimmed = top_schools[:top_schools_amount]

    top_schools_formatted = list(
        map(lambda school: str(school["school_id"]), top_schools_trimmed)
    )

    return " ".join(top_schools_formatted)


def main():
    int(input())
    school_ids = list(map(int, input().split()))
    top_schools_amount = int(input())

    print(get_top_schools(school_ids, top_schools_amount))


if __name__ == "__main__":
    main()
