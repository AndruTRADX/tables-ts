import {  useEffect, useState } from "react"
import productService from "../services/TablesGlobal"
import { useContext } from 'react'
import { EditProductContext } from "../context/EditProductContext"

import EndProccess from "./EndProccess"
import { TabInfo } from "../data/TablesData"


function EditProductForm() {
  // Estados iniciales
  const [endProccess, setEndProccess] = useState<boolean>(false)
  const [productEdited, setProductEdited] = useState<boolean>(false)
  const { productName } = useContext(EditProductContext)

  const [previousProduct, setPreviousProduct] = useState<TabInfo>(() => {
    const defaultProduct: TabInfo = {
      productName: '',
      price: 0,
      productColor: '',
      category: '',
    }
  
    const product = productName ? productService.getProductByName(productName) : undefined;
    return product || defaultProduct;
  })

  const [currentProduct, setCurrentProduct] = useState<TabInfo>(() => {
    const defaultProduct: TabInfo = {
      productName: '',
      price: 0,
      productColor: '',
      category: '',
    }
  
    const product = productName ? productService.getProductByName(productName) : undefined;
    return product || defaultProduct;
  })
  
  useEffect(()=> {
    if(previousProduct === currentProduct) {
      setProductEdited(true)
    } 
  },[currentProduct])

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

  // Lógica de manipulación de las tablas
  const editProduct = (): void => {
    if(inputsAreCompleted && inputsAreCompleted) {
      if (productName && productName !== '') {
        productService.updateProductByName(productName, currentProduct)
      }
    } else {
      alert('Something went wrong, please check that the information is not empty.')
    }
  }
  
  return (
    <div className="max-w-5xl bg-white rounded-lg border border-gray-300 mx-auto p-6 my-8 shadow-sm">
      {
        endProccess
          ? <EndProccess title="Product edited successfully" message="The changes to your product have been uploaded to the table successfully." />
          : productName && productName !== '' 
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
                if(productEdited && inputsAreCompleted) {
                  editProduct()
                  setEndProccess(true) 
                } else {
                  alert('Something went wrong, please check that the information is not empty.')
                }
              }} 
              disabled={ productEdited? false : true } type="button" className="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center disabled:bg-red-600 disabled:cursor-not-allowed disabled:hover:bg-red-500">
                Edit Product
              </button>
            </form>

          </div>

          : <EndProccess title="You shouldn't be here :(" message="Please exit this route and return to the dashboard, there's no bug around here :'(" isNotGood={true} />
      }
    </div>
  )
}

export default EditProductForm