import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../components/Button";

const Choose = () => {
  const [options, setOptions] = useState([]);
  const [pokemon, setPokemon] = useState("");
  const getPokemon = async () => {
    try {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
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
      <div className="grid grid-cols-3 gap-2 mb-4">
        {options.map((option, index) => (
          <div className="flex button-active items-center h-12 px-4">
            <div className="w-10 mr-2">
              <img
                className="h-auto w-auto"
                src={`https://img.pokemondb.net/sprites/black-white/normal/${option}.png`}
                alt={option}
              />
            </div>
            <p key={index}>{option}</p>
          </div>
        ))}
      </div>
      <Button text="I Choose You!" path="/verify" />
    </div>
  );
};

export default Choose;
