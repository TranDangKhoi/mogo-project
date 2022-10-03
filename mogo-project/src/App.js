import "./App.scss";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/*" element={<>Not found</>}></Route>
      </Routes>
    </>
  );
}

export default App;
