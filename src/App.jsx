import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import CustomCard from "./components/CustomCard";
import Header from "./components/Header";

function App() {
  const [cards, setCards] = useState([]);
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");
  useEffect(() => {
    async function getData() {
      const responce = await fetch(
        "https://raw.githubusercontent.com/TheOksigen/purfect_data/refs/heads/main/country.json"
      );
      setCards(await responce.json());
    }
    getData();
  }, []);
  return (
    <>
      <Header cards={cards} setRegion={setRegion} setSearch={setSearch} />
      <CustomCard cards={cards} region={region} search={search} />
      <Cards cards={cards} region={region} search={search} />
    </>
  );
}

export default App;
