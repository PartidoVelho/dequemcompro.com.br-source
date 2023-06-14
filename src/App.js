import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

import SearchBox from "react-search-box";

import data from './companies.json';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState(""); //

  const handleSearch = (event) => {
    const results = data.filter((item) =>
      //item.value.toLowerCase().includes(searchTerm.toLowerCase())
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
    //setSearchValue(value);
  };

  const filteredData = data.filter((item) =>
//    item.value.toLowerCase().includes(searchValue.toLowerCase())
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBox
        placeholder="Pesquisar uma organização/empresa/negócio"
        //value={searchValue}
        value={searchTerm}
        data={filteredData}
        //onChange={handleSearch}
        onChange={(event) => setSearchTerm(event.target.value)}
        onSelect={(value) => console.log("selected", value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {searchResults.map((item) => (
          <div key={item.name}>
            <h3>{item.name}</h3>
            <img width="100px" src={item.logo} alt={item.name} />
            <p>
              Administração apoiou (até 2022) ou apoia o Bolsonarismo: {item.supports_bolsonarism ? 'Sim' : 'Não'} | <a href={item.proof_supports_bolsonarism_link}>Prova</a>
            </p>
            <p>
              Administração feriu os Direitos Humanos:{' '}
              {item.hurt_human_rights ? 'Sim' : 'Não'} | <a href={item.proof_hurt_human_rights_link}>Prova</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
