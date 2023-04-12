import {  useEffect, useState } from "react"
import productService from "../services/TablesGlobal"
import { useContext } from 'react'
import { EditProductContext } from "../context/EditProductContext"

import EndProccess from "./EndProccess"
import { TabInfo } from "../data/TablesData"
import { Link } from "react-router-dom"


function EditProductForm() {
  // Estados iniciales
  const [endProccess, setEndProccess] = useState<boolean>(false)
  const [productEdited, setProductEdited] = useState<boolean>(false)
  const { 
    productIndex, 
    setProductIndex, 
    tableIndex, 
    setTabletIndex, 
    productAuthor, 
    setProductAuthor 
  } = useContext(EditProductContext)

  // Estados del producto 
  const [previousProduct, setPreviousProduct] = useState<TabInfo>(() => {
    const defaultProduct: TabInfo = {
      productName: '',
      price: 0,
      productColor: '',
      category: '',
    }
  
    const product = productAuthor ? productService.getProductByTableAndProductIndex(tableIndex, productIndex) : undefined
    return product || defaultProduct
  })
  const [currentProduct, setCurrentProduct] = useState<TabInfo>(() => {
    const defaultProduct: TabInfo = {
      productName: '',
      price: 0,
      productColor: '',
      category: '',
    }
  
    const product = productAuthor ? productService.getProductByTableAndProductIndex(tableIndex, productIndex) : undefined
    return product || defaultProduct
  })

  // Estados de los inputs
  const [productNameValue, setProductNameValue] = useState<string>(currentProduct.productName || '')
  const [colorValue, setColorValue] = useState<string>(currentProduct.productColor || '')
  const [categoryValue, setCategoryValueValue] = useState<string>(currentProduct.category || '')
  const [priceValue, setPriceValueValue] = useState<number>(currentProduct.price || 0)
  

  // obtener los valores de los inputs
  const handleInputChange = (property: string, value: string | number) => {
    setCurrentProduct({
      ...currentProduct,
      [property]: value
    })
  }
  const handleProductNameChange = (event: { target: { value: any; }; }) => {
    setProductNameValue(event.target.value)
    handleInputChange("productName", event.target.value)
  }
  const handleColorChange = (event: { target: { value: any; }; }) => {
    setColorValue(event.target.value)
    handleInputChange("productColor", event.target.value)
  }
  const handleCategoryChange = (event: { target: { value: any; }; }) => {
    setCategoryValueValue(event.target.value)
    handleInputChange("category", event.target.value)
  }
  const handlePriceChange = (event: { target: { value: any; }; }) => {
    const price = Number(event.target.value);
    if (!isNaN(price)) {
      setPriceValueValue(price);
      handleInputChange("price", price)
    }
  }

  // limpiar los inputs
  const cleanAllInputs = () => {
    setProductNameValue('')
    setColorValue('')
    setCategoryValueValue('')
    setPriceValueValue(0)
  }

  // los inputs estan vacios?
  const inputsAreCompleted = ( productNameValue && colorValue && categoryValue !== '') && (priceValue > 0)
  
  // los datos son iguales?
  const dataAreSame = (
    (previousProduct.productName !== currentProduct.productName) ||
    (previousProduct.price !== currentProduct.price) ||
    (previousProduct.productColor !== currentProduct.productColor) ||
    (previousProduct.category !== currentProduct.category)
  )
  useEffect(()=> {
    if(dataAreSame) {
      setProductEdited(true)
    } else {
      setProductEdited(false)
    }
  },[currentProduct])

  // Lógica de manipulación de las tablas
  const editProduct = (): void => {
    if(inputsAreCompleted && productEdited) {
      if (productAuthor && productAuthor !== "") {
        productService.updateProductByTableAndProductIndex(tableIndex, productIndex, currentProduct)
      }
    }
  }
  
  return (
    <div className="max-w-5xl bg-white rounded-lg border border-gray-300 mx-auto p-6 my-8 shadow-sm">
      {
        endProccess
          ? <EndProccess title="Product edited successfully" message="The changes to your product have been uploaded to the table successfully." />
          : productAuthor !== "" 
            ? <div>
            <form>
    
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input onChange={handleProductNameChange} value={productNameValue}
                  type="text" name="floating_product_name" id="floating_product_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer" placeholder=" " required />
                  <label htmlFor="floating_product_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product name</label>
                </div>
                
                <div className="relative z-0 w-full mb-6 group">
                  <input onChange={handleColorChange} value={colorValue}
                  type="text" name="floating_color" id="floating_color" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer" placeholder=" " required />
                  <label htmlFor="floating_color" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Color</label>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input onChange={handleCategoryChange}  value={categoryValue}
                  type="text" name="floating_category" id="floating_category" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer" placeholder=" " required />
                  <label htmlFor="floating_category" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Category</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input onChange={handlePriceChange} value={priceValue}
                  type="number" name="floating_price" id="floating_price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-indigo-600 peer" placeholder=" " required />
                  <label htmlFor="floating_price" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                </div>
              </div>
              
              <button onClick={() => { 
                if(inputsAreCompleted && productEdited) {
                  editProduct()
                  setProductIndex(0)
                  setTabletIndex(0)
                  setProductAuthor("")
                  setEndProccess(true) 
                  cleanAllInputs()
                } else {
                  alert('Something went wrong, please check that the information is not empty.')
                }
              }} 
              disabled={ productEdited? false : true } type="button" className="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center disabled:bg-red-600 disabled:cursor-not-allowed disabled:hover:bg-red-500">
                Edit Product
              </button>

              <Link to="/tables-ts/dashboard" onClick={() => { 
                setProductIndex(0)
                setTabletIndex(0)
                setProductAuthor("")
                cleanAllInputs()
              }}
                type="button" className="text-gray-600 bg-white hover:bg-gray-50 border border-gray-300 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 ml-4 text-center">
                  Cancel
                </Link>
            </form>

          </div>

          : <EndProccess title="You shouldn't be here :(" message="Please exit this route and return to the dashboard, there's no bug around here." isNotGood={true} />
      }
    </div>
  )
}

export default EditProductForm