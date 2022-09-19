import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../components/Button";

const Choose = () => {
  const [options, setOptions] = useState([]);
  const [pokemonData, setPokemonData] = useState<any>(undefined);
  const [searchInput, setSearchInput] = useState("");
  const getPokemon = async (pokemon: string) => {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );
      setPokemonData(res.data);
      console.log("res is ,", res);
    } catch (e) {
      console.log(e);
    }
  };
  const getPokemonPreview = async () => {
    try {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=5");
      const options = res?.data?.results?.map((data: any) => data.name);
      setOptions(options);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPokemonPreview();
  }, [options]);
  return (
    <div className="flex flex-col">
      <p>Choose your pokemon</p>
      {pokemonData ? (
        <div className="flex">
          <img
            className="h-auto w-auto"
            src={`https://img.pokemondb.net/sprites/black-white/normal/${pokemonData?.name}.png`}
            alt={pokemonData?.name}
          />
          <div className="grid grid-cols-2 text-xs">
            <div>
              <p>Details</p>
              <p>name: {pokemonData.name}</p>
              <p>
                type: {pokemonData.types.map((data: any) => data.type.name)}
              </p>
            </div>
            <div>
              <p>Stats</p>
              {pokemonData.stats.map((data: any) => (
                <p>
                  {data.stat.name}:{data.base_stat}
                </p>
              ))}
            </div>
          </div>
        </div>
      ) : null}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {options.map((option, index) => (
          <div
            key={index}
            className="flex button-active items-center h-12 px-4"
          >
            <div className="w-10 mr-2">
              <img
                className="h-auto w-auto"
                src={`https://img.pokemondb.net/sprites/black-white/normal/${option}.png`}
                alt={option}
              />
            </div>
            <p>{option}</p>
          </div>
        ))}
      </div>
      <p>Can't find the pokemon you're looking for? Search for it below!</p>
      <div className="flex w-full">
        <input
          className="mb-2"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={() => getPokemon(searchInput)}>Search</button>
      </div>
      <Button text="I Choose You!" path="/verify" />
    </div>
  );
};

export default Choose;
