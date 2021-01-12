
import { Cards, Charts, CountryPicker } from './components';
import styles from './App.module.css';
import { useEffect, useState } from 'react';

import { fetchData } from './Api';

function App() {
  const [data, setData] = useState({
    data: {},
    country: '',
  }
  )
  useEffect(() => {
    const fetchApi = async() => {
      const responseData = await fetchData();
      setData({ data: responseData });
    }
    fetchApi();
  }, [])
  const handleCountryChange = async (country) => {
    const response = await fetchData(country);
    setData({ data: response,country: country });
}

  return (
    <div className={styles.container}>
      <img className={styles.image} src={`https://i.ibb.co/7QpKsCX/image.png`} alt="covid-19"/>
      <Cards data={data.data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Charts data={data.data} country={ data.country }/>
    </div>
  );
}

export default App;
