import { TableDataType } from "../data/TablesData"

type Props = {
  tablesData: TableDataType
};


function GenericTable(props: Props ):JSX.Element {
  let tab = props.tablesData

  return (
    <div className="w-full py-8 max-w-5xl">

      <div className="relative overflow-x-auto sm:rounded-lg scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-gray-300 hover:scrollbar-thumb-indigo-700">
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
            </tr>
          </thead>

          <tbody>

            {
              tab.tabInfo.map((data, index2) => (
                <tr className="bg-white border-b" key={`${index2}`}>
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
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default GenericTable