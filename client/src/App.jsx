import { BrowserRouter, Route, Routes } from "react-router-dom";
import Crud from "./components/Crud";
import View from "./components/View";
import { createContext, useState } from "react";
import CreateComponent from "./components/Create";
import Update from "./components/Update";
const Newcontext = createContext(); 
function App() {
  const [user, setUser] = useState([])
  return (
    <>
      <Newcontext.Provider value={[user, setUser]}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Crud/>}></Route> 
      <Route path="/view/:index" element={<View/>}></Route> 
      <Route path="create" element={<CreateComponent />} />
      <Route path="/update/:index" element={<Update />} />
      </Routes>
      </BrowserRouter>
      </Newcontext.Provider>
    </>
  );
}

export default App;


export { Newcontext };
