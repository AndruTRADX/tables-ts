import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home.";
import Login from "./routes/Login";
import CreateTable from "./routes/CreateTab";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <BrowserRouter>
        <Routes>
          <Route path="/dasboard" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-table" element={<CreateTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
