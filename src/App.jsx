import { Routes, Route, Link } from 'react-router-dom'
import "./App.css";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar"

function App() {
  return (
    <>

     <Navbar/>

    <Routes>

    <Route path={"/country"} element={<HomePage/>}/>
    <Route path={"/country/:countryId"} element={<CountryDetailsPage/>}/>

    </Routes>
    </>
  );
}

export default App;
