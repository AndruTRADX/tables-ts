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

  public getTableByIndex(index: number): TableDataType | undefined {
    return this.tables.find((table, i) => i === index)
  }

  public getTableByAuthorAndIndex(author: string, index: number): TableDataType | undefined {
    return this.tables.find((table, i) => table.author === author && i === index)
  }

  public getProductByNameAndTableAuthor(name: string, author: string): TabInfo | undefined {
    const table = this.getTableByAuthor(author)
    if (table) {
      const product = table.tabInfo.find((product) => product.productName === name)
      if (product) {
        return product
      }
    }
    return undefined
  }

  public getProductByTableAndProductIndex(tableIndex: number, productIndex: number): TabInfo | undefined {
    const table = this.getTableByIndex(tableIndex);
    if (table) {
      const product = table.tabInfo[productIndex];
      if (product) {
        return product;
      }
    }
    return undefined;
  }

  public addTable(table: TableDataType): void {
    this.tables.push(table)
  }

  public addProductToTable(author: string, index: number, product: TabInfo): void {
    const table = this.getTableByAuthorAndIndex(author, index)
    if (table) {
      table.tabInfo.push(product)
    }
  }

  public updateProductByTableAndProductIndex(tableIndex: number, productIndex: number, newProduct: TabInfo): void {
    const table = this.getTableByIndex(tableIndex);
    if (table) {
      table.tabInfo[productIndex] = newProduct;
    }
  }

  public deleteProductByIndexAndTableAuthor(index: number, author: string): void {
    const table = this.getTableByAuthor(author)
    if (table) {
      table.tabInfo.splice(index, 1)
      if (table.tabInfo.length === 0) {
        this.deleteTableByIndexAndAuthor(index, author)
      }
    }
  }

  public deleteTableByIndexAndAuthor(index: number, author: string): void {
    const table = this.getTableByAuthorAndIndex(author, index)
    if (table) {
      this.tables.splice(this.tables.indexOf(table), 1);
    }
  }

}

const productService = new ProductService(TablesData)

export default productService