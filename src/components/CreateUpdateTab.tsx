import { useEffect, useState } from 'react'
import { TableDataType } from '../data/TablesData'
import productService from '../services/TablesGlobal'
import GenericTable from './TableGeneric';
import EndProccess from './EndProccess';

type User = {
  name: string;
  age: number;
  email: string;
};

type Props = {
  create: boolean;
  user?: User;
};

function CreateAndUpdateTable(props: Props) {
  // Estados iniciales
  const [isCreate, setIsCreate] = useState<boolean>(props.create)
  const [endProccess, setEndProccess] = useState<boolean>(false)
  const [currentTable, setCurrentTable] = useState<TableDataType>({ author: '', tabInfo: [] })
  const [isTableCreated, setIsTableCreated] = useState<boolean>(false)

  // Estados de los inputs
  const [authorValue, setAuthorValue] = useState<string>('')
  const [productNameValue, setProductNameValue] = useState<string>('')
  const [colorValue, setColorValue] = useState<string>('')
  const [categoryValue, setCategoryValueValue] = useState<string>('')
  const [priceValue, setPriceValueValue] = useState<number>(1)
  

  // obtener los valores de los inputs
  const handleAuthorChange = (event: { target: { value: any; }; }) => {
    setAuthorValue(event.target.value)
  }
  const handleProductNameChange = (event: { target: { value: any; }; }) => {
    setProductNameValue(event.target.value)
  }
  const handleColorChange = (event: { target: { value: any; }; }) => {
    setColorValue(event.target.value)
  }
  const handleCategoryChange = (event: { target: { value: any; }; }) => {
    setCategoryValueValue(event.target.value)
  }
  const handlePriceChange = (event: { target: { value: any; }; }) => {
    const price = Number(event.target.value);
    if (!isNaN(price)) {
      setPriceValueValue(price);
    }
  }

  // Lógica de manipulación de las tablas
  const createNewTable = (): void => {
    productService.addTable(currentTable)
  }
  const addNewProductToTable = (): void => {
    if(isTableCreated) {
      setCurrentTable({
        ...currentTable,
        tabInfo: [
          ...currentTable.tabInfo,
          {
            productName: productNameValue,
            productColor: colorValue,
            category: categoryValue,
            price: priceValue
          }
        ]
      })
    } else {
      setIsTableCreated(true)
      setCurrentTable({
        author: authorValue,
        tabInfo: [
          {
            productName: productNameValue,
            productColor: colorValue,
            category: categoryValue,
            price: priceValue
          },
        ]
      })
    }
  }

  // Si el proceso termina
  useEffect(()=> {
    setCurrentTable({
      author: '',
      tabInfo: []
    })
    setIsTableCreated(false)
  },[endProccess])
  
  return (
    <div className="max-w-5xl bg-white rounded-lg border border-gray-300 mx-auto p-6 my-8 shadow-sm">
      {
        endProccess
          ? <EndProccess title="Table created" message="Congratulations, your table has been created successfully. What's teh next step? :)" action={true} actionMessage="Create another table" editState={setEndProccess} />
          : <div>
              <form>
                <div className="relative z-0 w-full mb-6 group">
                  <input onChange={handleAuthorChange} disabled={isTableCreated ? true : false}
                  type="text" name="floating_author" id="floating_author" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer disabled:cursor-not-allowed disabled:border-red-500 disabled:bg-red-100" placeholder=" " required />
                  <label htmlFor="floating_author" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Author</label>
                </div>
      
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <input onChange={handleProductNameChange}
                    type="text" name="floating_product_name" id="floating_product_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer" placeholder=" " required />
                    <label htmlFor="floating_product_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product name</label>
                  </div>
                  
                  <div className="relative z-0 w-full mb-6 group">
                    <input onChange={handleColorChange}
                    type="text" name="floating_color" id="floating_color" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer" placeholder=" " required />
                    <label htmlFor="floating_color" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Color</label>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <input onChange={handleCategoryChange} 
                    type="text" name="floating_category" id="floating_category" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer" placeholder=" " required />
                    <label htmlFor="floating_category" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Category</label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input onChange={handlePriceChange} 
                    type="number" name="floating_price" id="floating_price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-indigo-600 peer" placeholder=" " required />
                    <label htmlFor="floating_price" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                  </div>
                </div>
                
                <button onClick={() => { createNewTable(); setEndProccess(true) }}
                type="button" className="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center">
                  {
                    isCreate
                      ? 'Submit table'
                      : 'Update Table'
                  }
                </button>
                
                <button onClick={() => { addNewProductToTable() }}
                type="button" className="text-gray-600 bg-white hover:bg-gray-50 border border-gray-300 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 ml-4 text-center">
                  {
                    isTableCreated
                      ? 'Add product'
                      : 'Create table'
                  }
                </button>
              </form>
      
              {
                isTableCreated
                  ? <GenericTable tablesData={currentTable} />
                  : <p className="my-4 text-sm text-gray-500 leading-7">Add product before create your table :)</p>
              }
            </div>
      }
    </div>
  )
}

export default CreateAndUpdateTable