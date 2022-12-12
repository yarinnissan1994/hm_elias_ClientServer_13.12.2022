import "./App.css";
import { Routes, Route } from "react-router-dom";
import { InsertStudent, PageNotFound, StudentsList } from "./components";
import { Main } from "./Layout/Main/main.layout";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Main />
      </div>
      <br />
      <div className="main">
        <Routes>
          <Route path="/" element={<StudentsList />}></Route>
          <Route path="/insertStudent" element={<InsertStudent />}></Route>
          <Route path="/404" element={<PageNotFound />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
