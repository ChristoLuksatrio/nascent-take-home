import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../components/Button";
import { TextField, Autocomplete } from "@mui/material";

const Choose = () => {
  const [options, setOptions] = useState<any>([]);
  const [pokemonData, setPokemonData] = useState<any>(undefined);
  const [suggestions, setSuggestions] = useState<any>([]);

  const getPokemon = async (pokemon: string) => {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );
      setPokemonData(res.data);
      selectPokemon(res.data.name);
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
    const localStorage = JSON.parse(
      window.localStorage.getItem("formInput") || ""
    );
    if (localStorage?.pokemon) {
      getPokemon(localStorage.pokemon);
    }
    getPokemonList();
    getPokemonSuggestions();
  }, []);

  return (
    <div className="flex flex-col h-full">
      <p className="text-xl mb-1">Choose your Pokemon</p>
      <div className="h-1 w-16 bg-amber-900 mb-4"></div>
      {pokemonData ? (
        <div className="flex flex-col md:flex-row bg-amber-400 border-2 border-amber-900 rounded-md mb-2 p-2">
          <div className="w-24 h-24 bg-amber-200 border-2 border-amber-200 rounded-md self-center md:self-auto my-auto mb-4 md:mb-0 mr-4">
            <img
              className="h-auto w-auto"
              src={`https://img.pokemondb.net/sprites/black-white/normal/${pokemonData?.name}.png`}
              alt={pokemonData?.name}
            />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 text-xs">
            <div>
              <p className="mb-1">Details</p>
              <div className="h-1 w-4 bg-amber-900 mb-2"></div>
              <p>name: {pokemonData.name}</p>
              <p>
                type: {pokemonData.types.map((data: any) => data.type.name)}
              </p>
            </div>
            <div>
              <p className="mb-1">Stats</p>
              <div className="h-1 w-4 bg-amber-900 mb-2"></div>
              {pokemonData.stats.map((data: any, index: number) => (
                <p key={index}>
                  {data.stat.name}:{data.base_stat}
                </p>
              ))}
            </div>
            <div className="hidden lg:block">
              <p className="mb-1">Abilities</p>
              <div className="h-1 w-4 bg-amber-900 mb-2"></div>
              {pokemonData.abilities.map((data: any, index: number) => (
                <p key={index}>{data.ability.name}</p>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
        {suggestions?.map((suggestion: any, index: number) => (
          <Button
            key={index}
            onClick={() => getPokemon(suggestion.name)}
            component={
              <div className="flex items-center">
                <div className="hidden md:block w-10 mr-2 ">
                  <img
                    src={`https://img.pokemondb.net/sprites/black-white/normal/${suggestion.name}.png`}
                    alt={suggestion.name}
                  />
                </div>
                <p className="text-xs md:text-base">{suggestion.name}</p>
              </div>
            }
          ></Button>
        ))}
      </div>
      <p className="text-xs md:text-base mb-2">
        Can't find the pokemon you're looking for? Search for it below!
      </p>
      <Autocomplete
        className="mb-2"
        options={options}
        onChange={(_event: any, newValue: any | null) => {
          getPokemon(newValue.label);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      <Button
        disabled={!pokemonData}
        component="I Choose You!"
        path="/verify"
        className="mt-auto"
      />
    </div>
  );
};

export default Choose;
