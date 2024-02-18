import "./App.css";
import Navbar from "./component/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from "./page/authentication/Authentication";
import Database from "./page/database/Database";
import Storage from "./page/storage/Storage";
import Hosting from "./page/hosting/Hosting";
import Function from "./page/function/Function";
import MachineLearning from "./page/machine-learning/MachineLearning";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Navbar />} /> */}
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/database" element={<Database />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/hosting" element={<Hosting />} />
          <Route path="/functions" element={<Function />} />
          <Route path="/machine-learning" element={<MachineLearning />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
