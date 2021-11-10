import { Babies } from "./components/babynames";
import "./App.css";
import { useState } from "react";
import { Search } from "./components/SearchBar";
import { FavouriteItems } from "./components/favouriteslist";
import babies from "./babies.json";

type Baby = {
  name: string;
  sex: string;
  id: number;
};

function App(): JSX.Element {
  const [searchText, setSearchText] = useState<string>("");
  const [searchSex, setSearchSex] = useState<string>("");
  const [favourites, setFavourites] = useState<Baby[]>([]);
  const [babyList, setBabyList] = useState<Baby[]>(babies);

  return (
    <>
      <Search
        searchText={searchText}
        handleSearchText={setSearchText}
        handleSearchSex={setSearchSex}
      />
      <br />
      <FavouriteItems
        handleAddToFavourites={setFavourites}
        favourites={favourites}
        handleAddtoBabyList={setBabyList}
        BabyList={babyList}
      />
      <br />
      <h2>Find my baby!</h2>
      <br />
      <Babies
        searchText={searchText}
        searchSex={searchSex}
        handleAddToFavourites={setFavourites}
        favourites={favourites}
        BabyList={babyList}
        handleAddtoBabyList={setBabyList}
      />
    </>
  );
}

export default App;
