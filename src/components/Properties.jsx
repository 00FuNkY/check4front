import axios from 'axios';
import { useEffect, useState } from 'react';

function Properties() {
  const [properties, setProperties] = useState([
    {
      Title: 'Something',
      Description: 'went really wrong',
      Lieux: 'on the server',
    },
  ]);

  useEffect(() => {
    axios
      .get(`http://localhost:3090/api/v1/properties`)
      .then((res) => setProperties(res.data));
  }, []);

  return properties.map((e) => (
    <ul>
      <li>{e.Title}</li>
      <li>{e.Description}</li>
      <li>{e.Lieux}</li>
    </ul>
  ));
}

export default Properties;
