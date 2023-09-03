import React from "react";
import {Route,Routes} from "react-router-dom"
import Layout from "./Components/Header/Layout";
import Projects from "./Components/Projects/Projects";
import Experience from "./Components/Experience/Experience";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Experience' element={<Experience />} />
      </Routes>
    </Layout>
  
    
  );
}

export default App;
