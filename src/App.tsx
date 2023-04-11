import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home.";
import Login from "./routes/Login";
import CreateTable from "./routes/CreateTab";
import Hello from "./routes/Hello";
import EditTable from "./routes/Editproduct";
import { EditProductProvider } from "./context/EditProductContext";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <BrowserRouter>
        <Routes>
          <Route path="/tables-ts/" element={<Hello />} />
          <Route path="/tables-ts/login" element={<Login />} />
          <Route path="/tables-ts/create-table" element={<CreateTable />} />
          
          <Route path="/tables-ts/dashboard" element={<EditProductProvider> <Home /> </EditProductProvider>} />
          <Route path="/tables-ts/edit-product" element={<EditProductProvider> <EditTable /> </EditProductProvider>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
