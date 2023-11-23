import { Routes, Route, Link } from 'react-router-dom'
import "./App.css";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>

      <nav>
      <h1>LAB | React WikiCountries</h1>
      <Link to={"/"}></Link>
      <Link to={"/countryId"}></Link>
      </nav>

    <Routes>

    <Route path={"/"} element={<HomePage/>}/>
    <Route path={"/:countryId"} element={<CountryDetailsPage/>}/>

    </Routes>
      </>
  );
}

export default App;
