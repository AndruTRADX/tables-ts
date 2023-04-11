import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react'

interface IEditProductContext {
  productName: string
  setProductName: Dispatch<SetStateAction<string>>
}

export const EditProductContext = createContext<IEditProductContext>({ productName: '', setProductName: ():void => {} })

type Props = {
  children: ReactNode
}

export const EditProductProvider = ({ children }: Props) => {
  const [productName, setProductName] = useState<string>('')

  return (
    <EditProductContext.Provider value={{ productName, setProductName }}>
      {children}
    </EditProductContext.Provider>
  )
}