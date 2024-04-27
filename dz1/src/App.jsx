import {Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import ApiPage from "./pages/ApiPage.jsx";
import FormPage2 from "./pages/FormPage.jsx";


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<ApiPage/>}/>
            <Route path='form' element={<FormPage2/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
