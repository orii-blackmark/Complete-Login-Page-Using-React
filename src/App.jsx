import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Protected from "./Protected";
import Dashboard from "./Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={<Protected Component={Dashboard} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
