import React, { useState, useEffect } from "react";

function List() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  const API_URL = "http://restcountries.eu/rest/v2/all";
  const getData = () => fetch(API_URL).then((res) => res.json());

  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);

  useEffect(() => {
    setFiltered(
      data.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, data]);

  return (
    <div className="list">
      <h1>Bandeiras do Mundo</h1>

      <input
        name="name"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br />
      {filtered.map((pais) => (
        <div>
          <h3>{pais.name}</h3>
          <img className="Flags" src={pais.flag} alt="flag_img" />
        </div>
      ))}
    </div>
  );
}

export default List;
