import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function CountryDetailsPage() {
  const params = useParams();
  console.log(params);
  const [countryDet, setCountryDet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCountry();
  }, [params.countryId]);

  const getCountry = async () => {
    try {
      const response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries/${params.countryId}`
      );
      setCountryDet(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return <h4>cargando</h4>;
  }

  return (
    <div>
      <p>Country Details</p>
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${countriesDet.alpha2Code.toLowerCase()}.png`}
        alt="country-pic"
      />
      <h2>{countriesDet.name.common}</h2>
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{countriesDet.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{countriesDet.area} km</td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              {countriesDet.borders.map((eachCountry) => (
                <p key={eachCountry}>
                  <Link to={`/${eachCountry}`}>{eachCountry}</Link>
                </p>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetailsPage;
