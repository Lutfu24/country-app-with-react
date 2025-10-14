import { useState } from "react";

function Header({ cards, setRegion, setSearch }) {
  const [inp, setInp] = useState("");
  const data = [...new Set(cards.map((card) => card.region))];

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
        className="text-3xl cursor-pointer"
        onClick={() => {
          setRegion("");
        }}
      >
        🔄️
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
          className="text-4xl cursor-pointer"
        >
          🔍
        </button>
      </label>
      <button
        className="text-3xl cursor-pointer"
        onClick={(e) => {
          e.target.innerText === "🌙"
            ? ((e.target.innerText = "🔆"),
              document.documentElement.classList.add("dark"))
            : ((e.target.innerText = "🌙"),
              document.documentElement.classList.remove("dark"));
        }}
      >
        🌙
      </button>
    </div>
  );
}

export default Header;
