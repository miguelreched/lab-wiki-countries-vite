import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
function HomePage() {
  //1
  const [countries, setCountries] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        setCountries(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return(
    <h2>cargando</h2>
    )
  }

  return (
    <div>
      <h3>WikiCountries: Your Guide to the World</h3>
      <ul>
        {countries.map((eachCountry) => {
          return (
            <li key={eachCountry._id}>
              <Link to={`/country/${eachCountry.alpha3Code}`}>
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`}
                  alt="foto-flag"
                />
                {eachCountry.name.official}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HomePage;

{
  /* <div>
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <a className="navbar-brand" href="/">
          WikiCountries
        </a>
      </div>
    </nav>

    <div className="container" style="max-height: 90vh; overflow: scroll">
      <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>
        WikiCountries: Your Guide to the World
      </h1>

      <div className="list-group">
        <a className="list-group-item list-group-item-action" href="/ABW">
          🇦🇼 Aruba
        </a>
        <a className="list-group-item list-group-item-action" href="/AFG">
          🇦🇫 Afghanistan
        </a>
        <a className="list-group-item list-group-item-action" href="/AGO">
          🇦🇴 Angola
        </a>
        <a className="list-group-item list-group-item-action" href="/AIA">
          🇦🇮 Anguilla
        </a>
        <a className="list-group-item list-group-item-action" href="/ALA">
          🇦🇽 Åland Islands
        </a>
        <a className="list-group-item list-group-item-action" href="/ALB">
          🇦🇱 Albania
        </a>
        <a className="list-group-item list-group-item-action" href="/AND">
          🇦🇩 Andorra
        </a>
        <a className="list-group-item list-group-item-action" href="/ARE">
          🇦🇪 United Arab Emirates
        </a>
        <a className="list-group-item list-group-item-action" href="/ARG">
          🇦🇷 Argentina
        </a>
        <a className="list-group-item list-group-item-action" href="/ARM">
          🇦🇲 Armenia
        </a>
        <a className="list-group-item list-group-item-action" href="/ASM">
          🇦🇸 American Samoa
        </a>
        <a className="list-group-item list-group-item-action" href="/ATA">
          🇦🇶 Antarctica
        </a>
        <a className="list-group-item list-group-item-action" href="/FLK">
          🇫🇰 Falkland Islands
        </a>
        <a
          className="list-group-item list-group-item-action active"
          href="/FRA"
        >
          🇫🇷 France
        </a>
        <a className="list-group-item list-group-item-action" href="/ZWE">
          🇿🇼 Zimbabwe
        </a>
      </div>
    </div>
  </div> */
}
