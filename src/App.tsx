import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import CoursesPage from "./pages/Cursos";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/add" element={<CoursesPage/>}/>
          <Route path="/get" element={<CoursesPage/>}/>
          <Route path="/edit" element={<MainPage/>}/>
          <Route path="/delete" element={<MainPage/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
