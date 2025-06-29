import React, { useState } from "react";

export default function CityList() {
  const [cities, setCities] = useState(["Delhi", "Mumbai", "Chennai"]);

  const removeCity = (city) => {
    const remainingCities = cities.filter((c) => c !== city);
    setCities(remainingCities);
  };

  return (
    <ul>
      {cities.map((city) => (
        <li key={city}>
          {city} <button onClick={() => removeCity(city)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}
