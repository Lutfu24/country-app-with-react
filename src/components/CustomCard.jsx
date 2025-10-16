import { FaAnglesDown } from "react-icons/fa6";

function CustomCard({ cards, region, search }) {
  const randomNumber = Math.floor(Math.random() * 49) + 1;
  const findCard = cards.find(
    (card, index) => card.name !== "Armenia" && index === randomNumber
  );
  return (
    !region &&
    !search && (
      <div className="bg-black/10 dark:bg-black/80 flex justify-center items-center flex-col gap-10 py-10">
        <div className="w-xl rounded-md bg-white dark:bg-gray-800 dark:text-white hover:drop-shadow-2xl/50">
          <div className="overflow-hidden">
            <img
              src={findCard?.flags?.svg}
              alt="flag"
              className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500 hover:scale-110 hover:delay-50 hover:cursor-pointer hover:ease-linear"
            />
          </div>
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">
                {findCard?.name}
              </h2>
            </div>
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-blue-600 dark:bg-green-800 text-gray-50"
              fdprocessedid="ercrar"
            >
              Read more
            </button>
          </div>
        </div>
        <button
          onClick={(e) => {
            e.target.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-red-900 cursor-pointer hover:drop-shadow-2xl/50 hover:scale-105 text-white text-2xl px-5 py-2 rounded-2xl my-20"
        >
          <FaAnglesDown />
        </button>
      </div>
    )
  );
}

export default CustomCard;
