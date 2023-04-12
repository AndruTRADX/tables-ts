import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react'

interface IEditProductContext {
  productIndex: number
  setProductIndex: Dispatch<SetStateAction<number>>
  tableIndex: number
  setTabletIndex: Dispatch<SetStateAction<number>>
  productAuthor: string
  setProductAuthor: Dispatch<SetStateAction<string>>
}

export const EditProductContext = createContext<IEditProductContext>({ 
  productIndex: 0, 
  setProductIndex: ():void => {},
  tableIndex: 0, 
  setTabletIndex: ():void => {},
  productAuthor: '', 
  setProductAuthor: ():void => {} 
})

type Props = {
  children: ReactNode
}

export const EditProductProvider = ({ children }: Props) => {
  const [productIndex, setProductIndex] = useState<number>(0)
  const [tableIndex, setTabletIndex] = useState<number>(0)
  const [productAuthor, setProductAuthor] = useState<string>('')

  return (
    <EditProductContext.Provider value={{ 
      productIndex, 
      setProductIndex,
      tableIndex,
      setTabletIndex,
      productAuthor, 
      setProductAuthor,
    }}>
      {children}
    </EditProductContext.Provider>
  )
}