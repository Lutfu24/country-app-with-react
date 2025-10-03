function Cards({ cards, region, search }) {
  const data =
    search && !region
      ? cards.filter(
          (card) => card.name !== "Armenia" && card.name.includes(search)
        )
      : region && search
      ? cards.filter(
          (card) =>
            card.name !== "Armenia" &&
            card.region === region &&
            card.name.includes(search)
        )
      : region && !search
      ? cards.filter(
          (card) => card.name !== "Armenia" && card.region === region
        )
      : cards.filter((card) => card.name !== "Armenia");

  return (
    <div className="bg-black/5 dark:bg-black/60 flex justify-center items-center py-10 flex-wrap gap-3">
      {data?.map((card, index) => {
        if (index > 49) return null;
        return (
          <div
            key={index}
            className="w-xs rounded-md bg-white dark:bg-gray-950 truncate hover:drop-shadow-2xl/50"
          >
            <div className="overflow-hidden">
              <img
                src={card.flags.svg}
                alt="flag"
                className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500 hover:scale-125 hover:delay-200 hover:cursor-pointer hover:ease-linear"
              />
            </div>
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide text-blue-700 dark:text-white">
                  {card.name}
                </h2>
                <p className="text-2xl text-red-500 font-bold dark:text-white">
                  {card.capital}
                </p>
              </div>
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-green-700 dark:bg-yellow-500 dark:text-black text-gray-50"
                fdprocessedid="ercrar"
              >
                Read more
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
