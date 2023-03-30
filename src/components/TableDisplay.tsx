import { useState, useEffect } from 'react'
import productService from '../services/TablesGlobal'

function Table():JSX.Element {
  const [TablesData, setTablesData] = useState(productService.getAllTables())
  const [updateTable, setUpdateTable] = useState(false)

  useEffect(() => {
    if (updateTable) {
      setTablesData(productService.getAllTables())
      setUpdateTable(false)
    }
  }, [updateTable])

  return (
    <div className="w-full p-2 max-w-5xl mx-auto">
      {
        TablesData.map( (tab, index) => (

          <div className="relative overflow-x-auto sm:rounded-lg m-8 scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-gray-300 hover:scrollbar-thumb-indigo-700" key={index}>
            <p className="text-sm text-white inline-block font-medium px-3 py-2 bg-indigo-600 rounded-t-md">Create by {tab.author}</p>
            <table className="w-full text-sm text-left text-gray-500">

              <thead className="text-sm text-gray-800 bg-gray-50 border-b border-gray-300">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Color
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>

                {
                  tab.tabInfo.map((data, index2) => (
                    <tr className="bg-white border-b hover:bg-gray-50" key={`${index}-${index2}`}>
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        { data.productName }
                      </th>
                      <td className="px-6 py-4">
                        { data.productColor }
                      </td>
                      <td className="px-6 py-4">
                        { data.category }
                      </td>
                      <td className="px-6 py-4">
                        ${ data.price }
                      </td>
                      <td className="px-6 py-4">
                        <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
                        <a href="#" className="font-medium text-red-600 hover:underline pl-4" onClick={
                          () => {
                            productService.deleteProductByName(data.productName)
                            setUpdateTable(true)
                          }
                        }>Delete</a>
                      </td>
                    </tr>
                  ))
                }

              </tbody>
            </table>
          </div>
        ))
      }
    </div>
  )
}

export default Table