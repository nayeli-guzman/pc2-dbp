import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import CoursesPage from "./pages/Cursos";
import GetPage from "./pages/GetCurso";
import { deleteProgramatById } from "./api";


function App() {



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/add" element={<CoursesPage/>}/>
          <Route path="/get/:number" element={<GetPage/>}/>
          <Route path="/edit/:number" element={<CoursesPage/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
