import { TableDataType, TablesData, TabInfo } from '../data/TablesData'

class ProductService {

  private tables: TableDataType[]

  constructor(tables: TableDataType[]) {
    this.tables = tables
  }

  public getAllTables(): TableDataType[] {
    return this.tables
  }

  public getTableByAuthor(author: string): TableDataType | undefined {
    return this.tables.find((table) => table.author === author)
  }

  public getTableByName(name: string): TabInfo | undefined {
    for (const table of this.tables) {
      for (const product of table.tabInfo) {
        if (product.productName === name) {
          return product
        }
      }
    }
    return undefined
  }

  public addProductToTable(author: string, product: TabInfo): void {
    let table = this.getTableByAuthor(author)
    if (!table) {
      table = { author, tabInfo: [] }
      this.tables.push(table)
    }
    table.tabInfo.push(product)
  }

  public deleteProductByName(name: string): void {
    for (const table of this.tables) {
      const index = table.tabInfo.findIndex((product) => product.productName === name)
      if (index !== -1) {
        table.tabInfo.splice(index, 1)
        if (table.tabInfo.length === 0) {
          this.deleteTableByAuthor(table.author)
        }
        return
      }
    }
  }

  public updateProduct(product: TabInfo): void {
    for (const table of this.tables) {
      const index = table.tabInfo.findIndex((p) => p.productName === product.productName)
      if (index !== -1) {
        table.tabInfo[index] = product
        return
      }
    }
  }

  public deleteTableByAuthor(author: string): void {
    const index = this.tables.findIndex((table) => table.author === author)
    if (index !== -1) {
      this.tables.splice(index, 1)
    }
  }

  public addTable(table: TableDataType): void {
    this.tables.push(table)
  }
}

const productService = new ProductService(TablesData)

export default productService