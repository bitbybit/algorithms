class PaginationHelper {
  #collection = []
  #itemsPerPage = 1

  constructor(collection, itemsPerPage) {
    this.#collection = collection
    this.#itemsPerPage = itemsPerPage
  }

  itemCount() {
    return this.#collection.length
  }

  pageCount() {
    return Math.ceil(this.itemCount() / this.#itemsPerPage)
  }

  pageItemCount(pageIndex) {
    if (pageIndex < 0 || pageIndex >= this.pageCount()) {
      return -1
    }

    const page = pageIndex + 1

    const endSliceIndex = page * this.#itemsPerPage
    const startSliceIndex = endSliceIndex - this.#itemsPerPage

    return this.#collection.slice(startSliceIndex, endSliceIndex).length || -1
  }

  pageIndex(itemIndex) {
    if (itemIndex < 0 || itemIndex >= this.#collection.length) {
      return -1
    }

    for (let page = 1; page <= this.pageCount(); page += 1) {
      const endPageIndex = page * this.#itemsPerPage - 1
      const startPageIndex = endPageIndex + 1 - this.#itemsPerPage

      if (itemIndex >= startPageIndex && itemIndex <= endPageIndex) {
        return page - 1
      }
    }
  }
}
