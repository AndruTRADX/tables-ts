import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home.";
import Login from "./routes/Login";
import CreateTable from "./routes/CreateTab";
import Hello from "./routes/Initial";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <BrowserRouter>
        <Routes>
          <Route path="/tables-ts/" element={<Hello />} />
          <Route path="/tables-ts/dashboard" element={<Home />} />
          <Route path="/tables-ts/login" element={<Login />} />
          <Route path="/tables-ts/create-table" element={<CreateTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
