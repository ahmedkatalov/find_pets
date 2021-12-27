import { Route, Routes } from "react-router-dom"
import Header from "./Header"
import CategoryPets from "./pages/CategoryPets"
import HomePage from "./pages/HomePage"
import Pets from "./pages/Pets"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import FormAddPet from "./pages/FormAddPet"
import ErrorPage from "./pages/errorPage"
import ContentPets from "./pages/HomePage/ContentPets"
import Footer from "./pages/Footer"
import PetInfo from "./pages/PetInfo"
import MyPets from "./pages/myPets";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allPets" element={<Pets />} />
        <Route path="/pets/category/:id" element={<CategoryPets />} />
        <Route path="/pets/add" element={<FormAddPet />} />
        <Route path="/content" element={<ContentPets />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/registry" element={<SignUp />} />
        <Route path="/pet/:id" element={<PetInfo />} />
        <Route path="/myPets/" element={<MyPets />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
