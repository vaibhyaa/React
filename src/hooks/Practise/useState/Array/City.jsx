import React, { useState } from 'react';

const City = () => {
  // Static city list; you can replace this with a call to an API.
  const cities = [
    'New York','New jercy', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
    'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'
  ];

  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (value) {
      // Filter cities based on input
      const filteredCities = cities.filter((city) =>
        city.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredCities);
    } else {
      setSuggestions([]);
    }


    // o
    // setSuggestions(
    //   value
    //     ? cities.filter((city) =>
    //         city.toLowerCase().startsWith(value.toLowerCase())
    //       )
    //     : []
    // );


    // setSuggestions(
    //   cities.filter(city => city.toLowerCase().includes(value.toLowerCase()))
    // );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type city name"
        value={input}
        onChange={handleInputChange}
      />
      <ul className="suggestions">
        {suggestions.map((city, index) => (
          <li key={index} onClick={() => setInput(city)}>
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default City;