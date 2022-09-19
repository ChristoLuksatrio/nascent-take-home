import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../components/Button";
import { TextField, Autocomplete } from "@mui/material";

const Choose = () => {
  const [options, setOptions] = useState<any>([]);
  const [pokemonData, setPokemonData] = useState<any>(undefined);
  const [suggestions, setSuggestions] = useState([]);

  const getPokemon = async (pokemon: string) => {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );
      setPokemonData(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const getPokemonList = async () => {
    try {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=1154&offset=0"
      );
      const options = res?.data?.results?.map((data: any) => {
        return { label: data.name };
      });
      setOptions(options);
    } catch (e) {
      console.log(e);
    }
  };

  const getPokemonSuggestions = async () => {
    try {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=4");
      const data = res?.data?.results;
      setSuggestions(data);
    } catch (e) {
      console.log(e);
    }
  };

  const selectPokemon = (pokemon: string) => {
    const input = JSON.parse(window.localStorage.getItem("formInput") || "");
    input["pokemon"] = pokemon;
    window.localStorage.setItem("formInput", JSON.stringify(input));
  };

  useEffect(() => {
    getPokemonList();
    getPokemonSuggestions();
  }, []);

  return (
    <div className="flex flex-col">
      <p>Choose your Pokemon</p>
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
              {pokemonData.stats.map((data: any, index: number) => (
                <p key={index}>
                  {data.stat.name}:{data.base_stat}
                </p>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      <div className="grid grid-cols-3 gap-2 mb-4">
        {suggestions?.map((suggestion: any, index: number) => (
          <div
            key={index}
            className="flex button-active items-center h-12 px-4"
            onClick={() => getPokemon(suggestion.name)}
          >
            <div className="w-10 mr-2">
              <img
                className="h-auto w-auto"
                src={`https://img.pokemondb.net/sprites/black-white/normal/${suggestion.name}.png`}
                alt={suggestion.name}
              />
            </div>
            <p>{suggestion.name}</p>
          </div>
        ))}
      </div>
      <p>Can't find the pokemon you're looking for? Search for it below!</p>
      <Autocomplete
        options={options}
        onChange={(_event: any, newValue: any | null) => {
          getPokemon(newValue.label);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      <Button
        disabled={!pokemonData}
        onClick={() => selectPokemon(pokemonData.name)}
        text="I Choose You!"
        path="/verify"
      />
    </div>
  );
};

export default Choose;
