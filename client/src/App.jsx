import { BrowserRouter, Route, Routes } from "react-router-dom";
import Crud from "./components/Crud";
import View from "./components/View";
import { createContext, useState } from "react";
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
      <Route path="create" element={<Create />} />
      </Routes>
      </BrowserRouter>
      </Newcontext.Provider>
    </>
  );
}

export default App;


export { Newcontext };
