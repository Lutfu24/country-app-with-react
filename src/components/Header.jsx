import { useEffect, useState } from "react";
import { AiOutlineClear } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { GiSun } from "react-icons/gi";
import { TbMapPinSearch } from "react-icons/tb";

function Header({ cards, setRegion, setSearch }) {
  const [inp, setInp] = useState("");
  const [darkMode, setDarkMode] = useState(
    () => JSON.parse(localStorage.getItem("theme")) || false
  );
  const data = [...new Set(cards.map((card) => card.region))];

  function handleDarkMode() {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    localStorage.setItem("theme", darkMode);
    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <div className="flex justify-around items-center gap-10 py-10 bg-black/50 dark:bg-black">
      <ul className="flex items-center gap-3 text-[20px] font-semibold">
        {data.map((card, index) => {
          return (
            <li
              onClick={(e) => {
                setRegion(e.target.innerText);
              }}
              className="hover:cursor-pointer underline-offset-2 underline hover:underline-offset-4 hover:text-[22px] hover:text-red-900 hover:delay-200 dark:text-white"
              key={index}
            >
              {card}
            </li>
          );
        })}
      </ul>
      <button
        className="text-3xl cursor-pointer dark:text-blue-500 text-white"
        onClick={() => {
          setRegion("");
        }}
      >
        <AiOutlineClear />
      </button>
      <label className="flex items-center gap-3">
        <input
          type="text"
          placeholder="search"
          onInput={(e) => {
            setInp(e.target.value);
          }}
          className="bg-white px-5 py-2 rounded-md outline-none"
        />
        <button
          onClick={() => setSearch(inp)}
          className="text-4xl cursor-pointer text-white dark:text-blue-400"
        >
          <TbMapPinSearch />
        </button>
      </label>
      <button
        className="text-3xl cursor-pointer"
        onClick={() => handleDarkMode()}
      >
        {darkMode ? (
          <GiSun className="text-yellow-400" />
        ) : (
          <BsFillMoonStarsFill />
        )}
      </button>
    </div>
  );
}

export default Header;
